const inquirer = require('inquirer');
const cTable = require('console.table');
const {
    addDepartmentQuestions,
    addRoleQuestions,
    addEmployeeQuestions,
    updateEmployeeQuestions
} = require('./questions');
const {
    getDepartments,
    getRoles,
    getEmployees,
    createDepartment,
    createRole,
    createEmployee,
    updateEmployee
} = require('./sql');


const actions = {
    viewDepartments: async () => {
        departments = await getDepartments();
        console.table(departments);
    },
    viewRoles: async () => {
        roles = await getRoles();
        console.table(roles);
    },
    viewEmployees: async () => {
        employees = await getEmployees();
        console.table(employees);
    },
    addDepartment: async () => {
        const { name } = await inquirer.prompt(addDepartmentQuestions);
        await createDepartment(name);
        console.log(`Added ${name} department`);
    },
    addRole: async () => {
        const { title, salary, departmentId } = await inquirer.prompt(addRoleQuestions);
        await createRole(title, salary, departmentId);
        console.log(`Added ${title} role`);
    },
    addEmployee: async () => {
        const { firstName, lastName, roleId, managerId } = await inquirer.prompt(addEmployeeQuestions);
        console.log(`Adding ${firstName} ${lastName} as an employee roleId=${roleId}, managerId=${managerId}`);
        await createEmployee(firstName, lastName, roleId, managerId);
        console.log(`Added ${firstName} ${lastName} as an employee`);
    },
    updateEmployee: async () => {
        const { employeeId, roleId } = await inquirer.prompt(updateEmployeeQuestions);
        await updateEmployee(employeeId, roleId);
        console.log(`Updated employee`);
    },
    exit: async () => {
        console.log('Thanks for coming! See you again soon!');
        process.exit();
    }
}

module.exports = actions;
