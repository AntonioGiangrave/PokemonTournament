var mongoose = require("mongoose");

mongoose.Collection.prototype.insert = function(docs, options, callback) {
    callback(null, docs);
};

module.exports = mongoose;