module.exports = {
    generate: generatePlace
}

var faker = require('faker');

function generatePlace() {
    return {
        name: faker.company.bs(),
        address: faker.address.streetAddress(),
        coordinates: [faker.address.latitude(), faker.address.longitude()]
    }
}
