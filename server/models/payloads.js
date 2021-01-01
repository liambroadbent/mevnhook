const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let payloads  = new Schema({
  payload: {
    type: Object,
  }
});

module.exports = mongoose.model('company', payloads);