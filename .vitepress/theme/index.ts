import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import Comments from "./Comments.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout() {
    // Mount the living-document comment overlay on every page.
    return h(DefaultTheme.Layout, null, {
      "layout-bottom": () => h(Comments),
    });
  },
};
