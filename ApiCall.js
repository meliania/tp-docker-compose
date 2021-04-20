const { Schema, model } = require('mongoose');

const ApiCallSchema = new Schema({
    url: { type: String },
    date: { type: Date, default: Date.now },
});

const ApiCallModel = model('ApiCall', ApiCallSchema);

module.exports = {
    ApiCallModel
};
