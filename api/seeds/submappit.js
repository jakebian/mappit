module.exports = {
    generate: generateSubmappit
}

var faker = require('faker');

function generateSubmappit() {
    return {
        name: faker.company.bsNoun(),
    }
}
