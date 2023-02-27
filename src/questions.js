const nextActionQuestions = [
    {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            { name: 'View all departments', value: 'viewDepartments' },
            { name: 'View all roles', value: 'viewRoles' },
            { name: 'Add a department', value: 'addDepartment' },
            { name: 'Add a role', value: 'addRole' },
            { name: 'Add an employee', value: 'addEmployee' },
            { name: 'Update an employee role', value: 'updateEmployee' },
            { name: 'Finish', value: 'finish' }
        ]
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
        name: 'name',
        message: 'What is the name of the role?'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary for the role?'
    },
    {
        type: 'list',
        name: 'department',
        message: 'Which department is the role is based in?',
        choices: ['Finance', 'Sales', 'Marketing', 'Human Resources']
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
        name: 'role',
        message: 'What is their role?',
        choices: ['Finance Controller', 'Finance Assistant', 'Sales Manager']
    },
    {
        type: 'list',
        name: 'manager',
        message: 'Who is their manager?',
        choices: ['John Doe', 'Jane Doe', 'Peter Plum']
    }
];

const updateEmployeeQuestions = [
    {
        type: 'list',
        name: 'employee',
        message: 'Which employee to update?',
        choices: ['John Doe', 'Jane Doe', 'Peter Plum']
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is their new role?',
        choices: ['Finance Controller', 'Finance Assistant', 'Sales Manager']
    }
];

module.exports = {
    nextActionQuestions,
    addDepartmentQuestions,
    addRoleQuestions,
    addEmployeeQuestions,
    updateEmployeeQuestions
};
