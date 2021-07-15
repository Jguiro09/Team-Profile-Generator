const fs = require('fs');
const inquirer = require('inquirer');

const Engineer = require('./engineer');
const Intern = require('./intern');
const Manager = require('./manager');

const team = [];

const addM = function newManager()
{
    return inquirer
        .prompt([
        {type: 'input', message: "Enter the manager's name", name: 'name'},
        {type: 'input', message: "Enter the manager's employee ID", name: 'employee'},
        {type: 'input', message: "Enter the manager's email address", name: 'email'},
        {type: 'input', message: "Enter the manager's office number", name: 'office'},
        ])
        .then((response) => {
            let mName = response.name;
            let employeeID = response.employee;
            let email = response.email;
            let office = response.office;

            let manager = new Manager (mName, employeeID, email, office);
            team.push(manager);
        })
}

const addE = function newEmployee()
{
    return inquirer
        .prompt([
            {type: 'list', message: 'Is this new employee an Engineer or Intern?', name: 'role', choices: ['Engineer','Intern']},
            {type: 'input', message: "Enter the employee's name", name: 'name'},
            {type: 'input', message: "Enter the employee's employee ID", name: 'employee'},
            {type: 'input', message: "Enter the employee's email address", name: 'email'},
            {type: 'input', message: "Enter the employee's github username", when: (list) => list.role == "Engineer", name: "github"},
            {type: 'input', message: "Enter the employee's school",when: (list) => list.role == "Intern", name: "school"},
        ])
        .then((response) => {
            let mName = response.name;
            let employeeID = response.employee;
            let email = response.email;

            if(response.role == "Intern")
            {
                let school = response.school;
                let intern = new Intern(mName,employeeID,email,school);
                team.push(intern);
            }

            else if(response.role == "Engineer")
            {
                let github = response.github;
                let engineer = new Engineer(mName,employeeID,email,github);
                team.push(engineer);
            }

            console.log(team);
        })
}

addM()
.then(addE);