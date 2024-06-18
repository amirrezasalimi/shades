// https://www.figma.com/plugin-docs/manifest/
export default {
  name: "shades",
  id: "12228526465750",
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
    devAllowedDomains: ["http://localhost:3000/"],
  },
};
