const read_CSV = require('/Users/nitya/github-classroom/status-20X/stylusdb-sql-assignment-w-nityammm/src/csvReader.js');

test('Read CSV File', async () => {
    const data = await read_CSV('tests/step-02/sample.csv')
    expect(data.length).toBeGreaterThan(0);
    expect(data.length).toBe(3);
    expect(data[0].name).toBe('John');
    expect(data[0].age).toBe('30'); //ignore the string type here, we will fix this later
});