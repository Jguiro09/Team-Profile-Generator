const Manager = require('../lib/Manager');

const manager = new Manager('Jacob', 42, 'jacob@gmail.com', 322)

describe('Creates our Manager', () =>
{
    test('Adds office number to Manager', () => {
        expect(manager.officeNumber).toEqual(expect.any(Number))
    })

    test('Grabs role from Manager', () => {
        expect(manager.getRole()).toMatch("Manager")
    })

    test('Grabs office number from Manager', () => {
        expect(manager.getOfficeNumber()).toBe(manager.officeNumber)
    })
})