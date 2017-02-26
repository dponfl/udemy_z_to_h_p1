/**
 * Data.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    address: {
      type: 'string'
    },
    birthdate: {
      type: 'string'
    },
    city: {
      type: 'string'
    },
    country: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    favorite: {
      type: 'boolean'
    },
    id_original: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    phonenumber: {
      type: 'string'
    },
    photo: {
      type: 'string'
    },
    sex: {
      type: 'string'
    },
    createdTs: {
      type: 'string'
    },
    updatedTs: {
      type: 'string'
    },
  },
  tableName: 'contacts'
};

