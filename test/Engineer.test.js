const Engineer = require('../lib/Engineer')

const engineer = new Engineer('Jacob', 42, 'jacob@gmail.com', 'githubUsername')

describe('Creates our Engineer', () => 
{
    test('Adds github to employee object', () => {
        expect(engineer.github).toEqual(expect.any(String));
    })
    
    test('Obtains Engineer Github', () => {
        expect(engineer.getGithub()).toMatch(engineer.github)
    })

    test('Obtains Engineer Role', () => {
        expect(engineer.getRole()).toEqual("Engineer")
    })
})