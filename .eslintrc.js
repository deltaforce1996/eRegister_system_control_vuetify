module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  rules: {
    "max-len": ["error", { code: 100, comments: 120, ignoreUrls: true }],
  },
};
