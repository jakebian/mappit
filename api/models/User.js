/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var _ = require('underscore')
var userSeeder = require('../seeds/user');
var seedCount = 40;

module.exports = {

  attributes: {
        email: {
            type: "string",
            required: true
        },

        password: {
            type: "string",
            required: true
        },

        username: {
            type: "string",
            required: true
        }
  },

  seedData: _.range(seedCount).map(userSeeder.generate)
};

