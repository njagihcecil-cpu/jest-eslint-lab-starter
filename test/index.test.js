const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe(`capitalizeWords()`, () => {
    test(`should capitalize the first letter of each word in a normal string`, () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
    });

    test(`should handle an empty string when input is empty`, () => {
        expect(capitalizeWords('')).toBe('');
    });

    test(`should handle strings with special characters correctly`, () => {
        expect(capitalizeWords('hello-world')).toBe('Hello-World');
    });

    test(`should capitalize asingle-word string`, () => {
        expect(capitalizeWords('javascript')).toBe('Javascript');
    });

});

describe('filterActiveUsers', () => {

  it('should filter active users from a mixed array', () => {
    const users = [
      { id: 1, isActive: true },
      { id: 2, isActive: false },
      { id: 3, isActive: true }
    ];
    const result = filterActiveUsers(users);
    expect(result).toHaveLength(2);
    expect(result[0].id).toBe(1);
  });

  it('should return an empty array if all users are inactive', () => {
    const users = [
      { id: 1, isActive: false },
      { id: 2, isActive: false }
    ];
    expect(filterActiveUsers(users)).toEqual([]);
  });

  
  it('should return an empty array when input is empty', () => {
    expect(filterActiveUsers([])).toEqual([]);
  });
});

describe('logAction', () => {
    beforeAll(() => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date('2024-01-01T00:00:00Z'));
    });
    afterAll(() => {        
        jest.useRealTimers();

    });

    test(`should generate correct log string for valid inputs`, () => {
        expect(logAction('action', 'username')).toBe("User username performed action at 2024-01-01T00:00:00.000Z");
    });

    test(`should handle missing actions or usernames`, () => {
        expect(logAction('', '')).toBe("");
    });

    test(`should handle empty strings as inputs`, () => {
        expect(logAction('')).toBe('');
    });

})



