// https://www.figma.com/plugin-docs/manifest/
export default {
  name: "shades",
  id: "1385705522724184971",
  api: "1.0.0",
  main: "plugin.js",
  ui: "index.html",
  capabilities: [],
  enableProposedApi: false,
  editorType: ["figma"],
  documentAccess: "dynamic-page",
  permissions: ["currentuser"],
  networkAccess: {
    allowedDomains: ["https://shades.toolstack.run/"],
    devAllowedDomains: ["http://localhost:3000/", "https://shades.toolstack.run/"],
  },
};
