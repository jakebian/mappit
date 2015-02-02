/**
* Place.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var _ = require('underscore')
var placeSeeder = require('../seeds/place');
var seedCount = 40;

module.exports = {

    attributes: {
        name: {
            type: "text",
            required: true
        },

        coordinates: {
            // format: [xCoordinate, yCoordinate]
            type: "array",
            required: true
        },

        address: {
            type: "string"
        },

        submappit: {
            model: "submappit"
        },

        author: {
            model: "user"
        }
    },

    seedData: _.range(seedCount).map(placeSeeder.generate)
};

