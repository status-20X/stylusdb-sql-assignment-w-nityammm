const readCSV = require('/Users/nitya/github-classroom/status-20X/stylusdb-sql-assignment-w-nityammm/src/csvReader.js');
const parseQuery = require('/Users/nitya/github-classroom/status-20X/stylusdb-sql-assignment-w-nityammm/src/queryParser.js');

test('Read CSV File', async () => {
    const data = await readCSV('tests/step-02/sample.csv');
    expect(data.length).toBeGreaterThan(0);
    expect(data.length).toBe(3);
    expect(data[0].name).toBe('John');
    expect(data[0].age).toBe('30'); //ignore the string type here, we will fix this later
});

test('Parse SQL Query', () => {
    const query = 'SELECT id, name FROM sample';
    const parsed = parseQuery(query);
    expect(parsed).toEqual({
        fields: ['id', 'name'],
        table: 'sample',
        whereClause: null
    });
});