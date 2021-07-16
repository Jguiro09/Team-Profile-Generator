
const Intern = require('../lib/Intern')

const intern = new Intern('Jacob', 42, 'jacob@gmail.com', 'schoolName')

describe('Creates our Intern', () => {
    test('Adds school to intern', () => 
    {
        expect(intern.school).toEqual(expect.any(String));
    })

    test('Grabs school from intern', () => {
        expect(intern.getSchool()).toMatch(intern.school);
    })

    test('Grabs role from intern', () => {
        expect(intern.getRole()).toMatch("Intern");
    })
})