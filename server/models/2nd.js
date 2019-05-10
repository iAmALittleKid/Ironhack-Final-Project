const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const secondSchema = new Schema({

}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const Second = mongoose.model('Second', secondSchema);
module.exports = Second;
