const chalk = require("chalk")
const faker = require('faker')

const randomName = faker.name.findName()
const randomEmail = faker.internet.email()

console.log(chalk.red('Hello, npm!'));
console.log(randomName, randomEmail)
