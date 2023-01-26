import packageJson from "./package.json";
import manifestJson from "./assets/manifest.json";
import assert from "node:assert";

const errorMessage = `Package JSON and Manifest JSON versions must match!

  package.json: ${packageJson.version}
  manifest.json: ${manifestJson.version}
`;

assert(packageJson.version === manifestJson.version, errorMessage);
