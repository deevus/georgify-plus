const { config } = require("@swc/core/spack");

module.exports = config({
  entry: {
    index: __dirname + "/src/index.ts",
    background: __dirname + "/src/background.ts",
  },
  output: {
    path: __dirname + "/dist",
  },
});
