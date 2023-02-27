INSERT INTO department (id, name)
VALUES (1, "Finance"),
       (2, "Sales"),
       (3, "Marketing"),
       (4, "Human Resources");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Finance Controller", 80000.00, 1),
       (2, "Accountant", 60000.00, 1),
       (3, "Sales Manager", 50000, 2),
       (4, "Sales Representative", 40000, 2),
       (5, "Marketing Manager", 40000, 3),
       (6, "Marketing Assistant", 30000, 3),
       (7, "HR Manager", 35000, 3),
       (8, "HR Assistant", 25000, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "John", "Doe", 1, null),
       (2, "Susan", "Brown",  2, 1),
       (3, "Frank", "Smith",  2, 1),
       (4, "Elton", "Gustav", 3, null),
       (5, "Jeremy", "Thomas", 4, 4),
       (6, "Claire", "Baker", 4, 4),
       (7, "Jem", "Morey", 5, null),
       (8, "Elle", "Prior", 6, 7),
       (9, "Angela", "Harrison", 7, null),
       (10, "Becky", "Travis", 8, 9);
