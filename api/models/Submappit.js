/**
* Submappit.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var _ = require('underscore')
var submappitSeeder = require('../seeds/submappit');
var seedCount = 40;

module.exports = {

  attributes: {
        name: {
            type: "text",
            required: true
        },

        places: {
            collection: "place",
            via: "submappit"
        }
  },

  seedData: _.range(seedCount).map(submappitSeeder.generate)
};

