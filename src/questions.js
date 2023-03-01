const { Separator } = require('inquirer');
const {
    getDepartments,
    getRoles,
    getManagers,
    getEmployees
} = require('./sql');

const nextActionQuestions = [
    {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            { name: 'View all departments', value: 'viewDepartments' },
            { name: 'View all roles', value: 'viewRoles' },
            { name: 'View all employees', value: 'viewEmployees' },
            { name: 'Add a department', value: 'addDepartment' },
            { name: 'Add a role', value: 'addRole' },
            { name: 'Add an employee', value: 'addEmployee' },
            { name: 'Update an employee role', value: 'updateEmployee' },
            new Separator(),
            { name: 'Exit', value: 'exit' }
        ],
        loop: false,
        pageSize: 10
    }
];

const addDepartmentQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the department?'
    }
];

const addRoleQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the role?'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary for the role?',
        filter: salary => salary.replace(/\D/g, ''),
        validate: salary => {
            if (Number.isNaN(salary) || salary <= 0) {
                return 'Salary must be a number greater than zero';
            }
            return true;
        }
    },
    {
        type: 'list',
        name: 'departmentId',
        message: 'Which department is the role is based in?',
        choices: () => getDepartments().then(
            departments => departments.map(({id, name}) => ({
                name: name,
                value: id
            }))
        ),
        loop: false
    }
];

const addEmployeeQuestions = [
    {
        type: 'input',
        name: 'firstName',
        message: 'What employees first name?'
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'What is their last name?'
    },
    {
        type: 'list',
        name: 'roleId',
        message: 'What is their role?',
        choices: () => getRoles().then(
            roles => roles.map(({id, title}) => ({
                name: title,
                value: id
            }))
        ),
        loop: false
    },
    {
        type: 'list',
        name: 'managerId',
        message: 'Who is their manager?',
        choices: () => getManagers().then(managers => {
            const choices = managers.map(({id, name}) => ({
                name: name,
                value: id
            }));
            choices.push({
                name: 'No Manager',
                value: null
            });
            return choices;
        }),
        loop: false
    }
];

const updateEmployeeQuestions = [
    {
        type: 'list',
        name: 'employeeId',
        message: 'Which employee to update?',
        choices: () => getEmployees().then(
            employees => employees.map(({id, name}) => ({
                name: name,
                value: id
            }))
        ),
        loop: false
    },
    {
        type: 'list',
        name: 'roleId',
        message: 'What is their new role?',
        choices: () => getRoles().then(
            roles => roles.map(({id, title}) => ({
                name: title,
                value: id
            }))
        ),
        loop: false
    }
];

module.exports = {
    nextActionQuestions,
    addDepartmentQuestions,
    addRoleQuestions,
    addEmployeeQuestions,
    updateEmployeeQuestions
};
