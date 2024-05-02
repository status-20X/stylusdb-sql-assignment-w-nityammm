const { readCSV } = require("../../src/csvReader");
const { parseSelectQuery, parseJoinClause } = require("../../src/queryParser");
const { executeSELECTQuery } = require("../../src/queryExecutor");

test("Read CSV File", async () => {
  const data = await readCSV("./student.csv");
  expect(data.length).toBeGreaterThan(0);
  expect(data.length).toBe(4);
  expect(data[0].name).toBe("John");
  expect(data[0].age).toBe("30"); //ignore the string type here, we will fix this later
});

test("Parse SQL Query", () => {
  const query = "SELECT id, name FROM student";
  const parsed = parseSelectQuery(query);
  expect(parsed).toEqual({
    fields: ["id", "name"],
    table: "student",
    whereClauses: [],
    joinCondition: null,
    joinTable: null,
    joinType: null,
    groupByFields: null,
    hasAggregateWithoutGroupBy: false,
    isDistinct: false,
    limit: null,
    orderByFields: null,
  });
});
