module.exports = {
    generate: generateUser
}

var faker = require('faker');

function generateUser() {
    return {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    }
}
