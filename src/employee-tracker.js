const inquirer = require('inquirer');
const { nextActionQuestions } = require('./questions');
const actions = require('./actions');

const nextAction = async () => {
    const response = await inquirer.prompt(nextActionQuestions);
    await actions[response.action]();
    nextAction();
};

const employeeTracker = () => nextAction();

module.exports = employeeTracker;
