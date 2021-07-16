const Employee = require('../lib/Employee');

const employee = new Employee('Jacob', 42, 'jacob@gmail.com')

describe('Creates our Employee', () => {
    test("creates our employee object", () => 
    {
        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    })

    test("obtains our employee name", () => 
    {
        expect(employee.getName()).toEqual(expect.any(String));
    })

    test("obtains our employee ID", () => 
    {
        expect(employee.getID()).toEqual(expect.any(Number));
    })

    test("obtains our employee Email", () => 
    {
        expect(employee.getEmail()).toEqual(expect.any(String));
    })

    test("obtains our employee Role", () => 
    {
        expect(employee.getRole()).toEqual(expect.any(String));
    })
});