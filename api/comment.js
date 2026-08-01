// POST /api/comment — files a living-document comment/objection as a public
// GitHub issue on razbakov/agora-org. Requires env AGORA_GITHUB_TOKEN
// (fine-grained PAT with Issues:write on the agora-org repo).
const OWNER = "razbakov";
const REPO = "agora-org";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "method not allowed" });
  }

  const token = process.env.AGORA_GITHUB_TOKEN;
  if (!token) {
    return res
      .status(503)
      .json({ ok: false, error: "commenting not configured yet" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  const comment = String(body.comment || "").trim().slice(0, 4000);
  if (!comment) return res.status(400).json({ ok: false, error: "empty comment" });

  const commenter = String(body.commenter || "Anonymous").trim().slice(0, 80);
  const section = String(body.section || "document").trim().slice(0, 120);
  const page = String(body.page || "/").trim().slice(0, 200);
  const quote = String(body.quote || "").trim().slice(0, 400);

  const title = `[objection] ${section}`.slice(0, 120);
  const issueBody = [
    `**Commenter:** ${commenter}`,
    `**Page:** \`${page}\``,
    `**Section:** ${section}`,
    "",
    quote ? `> ${quote}` : "",
    "",
    "---",
    "",
    comment,
    "",
    "_Filed via the living-document comment overlay on agora.razbakov.com._",
  ].join("\n");

  try {
    const gh = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/issues`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          "Content-Type": "application/json",
          "User-Agent": "agora-living-doc",
        },
        body: JSON.stringify({ title, body: issueBody, labels: ["objection"] }),
      }
    );
    const data = await gh.json();
    if (!gh.ok) {
      // Retry without labels (label may not exist on the repo yet).
      if (gh.status === 422) {
        const retry = await fetch(
          `https://api.github.com/repos/${OWNER}/${REPO}/issues`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/vnd.github+json",
              "X-GitHub-Api-Version": "2022-11-28",
              "Content-Type": "application/json",
              "User-Agent": "agora-living-doc",
            },
            body: JSON.stringify({ title, body: issueBody }),
          }
        );
        const rdata = await retry.json();
        if (retry.ok)
          return res.status(200).json({ ok: true, url: rdata.html_url, identifier: `#${rdata.number}` });
      }
      return res
        .status(502)
        .json({ ok: false, error: data.message || "github error" });
    }
    return res
      .status(200)
      .json({ ok: true, url: data.html_url, identifier: `#${data.number}` });
  } catch (e) {
    return res.status(502).json({ ok: false, error: "network error" });
  }
}
