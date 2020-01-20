import { fusebox } from "fuse-box";

fusebox({
  target: "browser",
  entry: "src/index.tsx",
  webIndex: {
    template: "src/index.html"
  },
  devServer: true
}).runDev();
