const db = require('./db');

const getDepartments = async () => {
    const [rows] = await db.query('SELECT id, name FROM department');
    return rows;
};

const getRoles = async () => {
    const [rows] = await db.query(`
        SELECT role.id, title, salary
        FROM role
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
        SELECT id, first_name as firstName, last_name as lastName
        FROM employee
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
