const inquirer = require('inquirer');
const {
    addDepartmentQuestions,
    addRoleQuestions,
    addEmployeeQuestions,
    updateEmployeeQuestions
} = require('./questions');

const actions = {
    viewDepartments: () => {
        console.log('TODO - View departments');
    },
    viewRoles: () => {
        console.log('TODO - View roles');
    },
    addDepartment: async () => {
        const { name } = await inquirer.prompt(addDepartmentQuestions);
        console.log(`TODO - Add department ${name}`);
    },
    addRole: async () => {
        const { name, salary, department } = await inquirer.prompt(addRoleQuestions);
        console.log(`TODO - Add role: ${name}, ${salary}, ${department}`);
    },
    addEmployee: async () => {
        const { firstName, lastName, role, manager } = await inquirer.prompt(addEmployeeQuestions);
        console.log(`TODO - Add employee: ${firstName}, ${lastName}, ${role}, ${manager}`);
    },
    updateEmployee: async () => {
        const response = await inquirer.prompt(updateEmployeeQuestions);
        console.log(`TODO - Update employee: `);
    },
    finish: async () => {
        console.log('Thanks for coming! See you again soon!');
        process.exit();
    }
}

module.exports = actions;
