import { generateApi } from "swagger-typescript-api";
import path from "path";

generateApi({
  fileName: "sherbook-api.ts",
  input: path.resolve(__dirname, "../docs/sherbook (1).json"),
  output: path.resolve(__dirname, "../src/lib/types/generated"),
  generateClient: false,
  generateRouteTypes: true,
  extractRequestParams: true,
  extractRequestBody: true,
  extractResponseBody: true,
  extractResponseError: true,
  enumNamesAsValues: true,
  generateUnionEnums: true,
})
  .then(({ files }) => {
    console.log(`Generated ${files.length} file(s):`);
    files.forEach((f) => console.log(`  - ${f.fileName}`));
  })
  .catch((err) => {
    console.error("Type generation failed:", err);
    process.exit(1);
  });
