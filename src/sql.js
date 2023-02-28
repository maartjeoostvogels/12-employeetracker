const db = require('./db');

const getDepartments = async () => {
    const [rows] = await db.query('SELECT id, name FROM department');
    return rows;
};

const getRoles = async () => {
    const [rows] = await db.query(`
        SELECT role.id, title, salary, department.name as department
        FROM role
        LEFT JOIN department ON role.department_id = department.id
    `);

    return rows;
};

const getManagers = async () => {
    const [rows] = await db.query(`
        SELECT id, first_name as firstName, last_name as lastName
        FROM employee
        WHERE manager_id IS NULL
    `);

    return rows;
};

const getEmployees = async () => {
    const [rows] = await db.query(`
        SELECT
            employee.id,
            employee.first_name as firstName,
            employee.last_name as lastName,
            role.title as jobTitle,
            role.salary AS salary,
            department.name AS department,
            manager.first_name AS manager
        FROM employee
        LEFT JOIN role ON employee.role_id = role.id
        LEFT JOIN department ON role.department_id = department.id
        LEFT JOIN employee as manager ON employee.manager_id = manager.id
    `);

    return rows;
};

const createDepartment = async name => await db.execute(
    'INSERT INTO department (name) VALUES (?)', [name]
);

const createRole = async (title, salary, departmentId) => await db.execute(
    'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)',
    [title, salary, departmentId]
);

const createEmployee = async (firstName, lastName, roleId, managerId) => await db.execute(
    'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
    [firstName, lastName, roleId, managerId]
);

const updateEmployee = async (employeeId, roleId) => await db.execute(
    'UPDATE employee SET role_id = ? WHERE id = ?',
    [roleId, employeeId]
);

module.exports = {
    getDepartments,
    getRoles,
    getManagers,
    getEmployees,
    createDepartment,
    createRole,
    createEmployee,
    updateEmployee
};
