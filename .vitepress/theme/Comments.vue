<script setup>
// Living-document commenting overlay.
// Hover any passage → 💬 → comment → POST /api/comment → files a GitHub issue
// on razbakov/agora-org. Ported from org.wedance.vip, adapted for VitePress SPA.
import { onMounted, onUnmounted, watch, nextTick } from "vue";
import { useRoute } from "vitepress";

const route = useRoute();
const SEL =
  ".VPHero .text, .VPFeature, .vp-doc p, .vp-doc li, .vp-doc h1, .vp-doc h2, .vp-doc blockquote";

let btn, toast, cur = null, pop = null;
let mo, mout, scroll, cleanupFns = [];

function tagBlocks() {
  document.querySelectorAll(SEL).forEach((el) => {
    if (el.hasAttribute("data-c")) return;
    const txt = (el.textContent || "").trim();
    if (txt.length < 25) return; // skip tiny fragments
    el.setAttribute("data-c", "");
    // section = nearest previous heading, else page title
    let label =
      document.querySelector(".vp-doc h1")?.textContent ||
      document.title.replace(/ \| Agora$/, "") ||
      "document";
    let h = el;
    while (h && h.previousElementSibling) {
      h = h.previousElementSibling;
      if (/^H[1-3]$/.test(h.tagName)) { label = h.textContent; break; }
    }
    el.setAttribute("data-section", (label || "document").replace(/[​#]/g, "").trim());
  });
}

function place(el) {
  const r = el.getBoundingClientRect();
  btn.style.top = window.scrollY + r.top - 6 + "px";
  btn.style.left = window.scrollX + r.right - 8 + "px";
}
function showToast(html, ms) {
  toast.innerHTML = html;
  toast.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove("show"), ms || 6000);
}
function closePop() {
  if (pop) { pop.remove(); pop = null; }
  btn.classList.remove("show");
  if (cur) cur.classList.remove("c-hot");
}

function openPopup() {
  if (!cur) return;
  const el = cur;
  el.classList.add("c-hot");
  const quote = (el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 220);
  const section = el.getAttribute("data-section") || "document";
  const page = route.path;
  if (pop) { pop.remove(); pop = null; }
  pop = document.createElement("div");
  pop.className = "cpop";
  pop.innerHTML =
    '<div class="quote">' + quote.slice(0, 140) + (quote.length > 140 ? "…" : "") + "</div>" +
    '<input class="who" placeholder="Your name (optional)">' +
    '<textarea class="txt" placeholder="Your comment or objection…"></textarea>' +
    '<div class="row"><button class="x">Cancel</button><button class="send" disabled>Send to triage →</button></div>' +
    '<div class="hint">Files a public issue on razbakov/agora-org.</div>';
  document.body.appendChild(pop);
  const r = el.getBoundingClientRect();
  let left = window.scrollX + Math.min(r.right + 10, window.innerWidth - 344);
  if (left < 8) left = 8;
  pop.style.top = window.scrollY + r.top + "px";
  pop.style.left = left + "px";
  const txt = pop.querySelector(".txt");
  const send = pop.querySelector(".send");
  const who = pop.querySelector(".who");
  txt.focus();
  txt.addEventListener("input", () => { send.disabled = !txt.value.trim(); });
  pop.querySelector(".x").addEventListener("click", closePop);
  send.addEventListener("click", () => {
    send.disabled = true;
    send.textContent = "Sending…";
    fetch("/api/comment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        quote, section, page,
        comment: txt.value.trim(),
        commenter: who.value.trim() || "Anonymous",
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        closePop();
        if (d && d.ok)
          showToast('✓ Filed — <a href="' + d.url + '" target="_blank">' + d.identifier + "</a>");
        else showToast("Couldn’t file it: " + ((d && d.error) || "error") + ". Try again shortly.", 7000);
      })
      .catch(() => { closePop(); showToast("Network error — please try again.", 6000); });
  });
  const outside = (ev) => {
    if (pop && !pop.contains(ev.target) && ev.target !== btn) {
      document.removeEventListener("mousedown", outside);
      closePop();
    }
  };
  setTimeout(() => document.addEventListener("mousedown", outside), 0);
}

onMounted(() => {
  btn = document.createElement("button");
  btn.className = "cbtn";
  btn.textContent = "💬";
  btn.title = "Comment on this passage";
  document.body.appendChild(btn);
  toast = document.createElement("div");
  toast.className = "ctoast";
  document.body.appendChild(toast);
  btn.addEventListener("click", openPopup);

  mo = (e) => {
    const el = e.target.closest("[data-c]");
    if (!el || pop) return;
    cur = el; place(el); btn.classList.add("show");
  };
  mout = (e) => {
    const el = e.target.closest("[data-c]");
    if (el && !pop && !e.relatedTarget?.closest?.(".cbtn")) {
      setTimeout(() => { if (!btn.matches(":hover") && !pop) btn.classList.remove("show"); }, 120);
    }
  };
  scroll = () => { if (cur && !pop) place(cur); };
  document.addEventListener("mouseover", mo);
  document.addEventListener("mouseout", mout);
  window.addEventListener("scroll", scroll);
  cleanupFns = [
    () => document.removeEventListener("mouseover", mo),
    () => document.removeEventListener("mouseout", mout),
    () => window.removeEventListener("scroll", scroll),
  ];

  nextTick(tagBlocks);
});

// re-scan on client-side navigation
watch(() => route.path, () => { closePop(); nextTick(() => setTimeout(tagBlocks, 60)); });

onUnmounted(() => {
  cleanupFns.forEach((f) => f());
  btn?.remove(); toast?.remove(); closePop();
});
</script>

<template>
  <span style="display: none" aria-hidden="true" />
</template>
