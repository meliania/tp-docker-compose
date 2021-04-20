const { Schema, Model } = require('mongoose');

const ApiCallSchema = new Schema({
    url: { type: String },
    date: { type: Date, default: Date.now },
});

const ApiCallModel = new Model('ApiCall', ApiCallSchema);

module.exports = {
    ApiCallModel
};
