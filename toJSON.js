const fs = require("fs");
const Papa = require("papaparse");

try {
  const file = fs.readFileSync("./users.csv", "utf8");
  const results = Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    encoding: "utf8",
    complete: (csvData) => csvData.data,
  }).data;
  fs.writeFileSync(
    "./cypress/fixtures/testUsers.json",
    JSON.stringify(results, null, 4),
    "utf-8"
  );
} catch (e) {
  throw Error(e);
}
