const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        requires: true
    },
    description: {
        type: String,
        requires: true
    }
});

module.exports = mongoose.model('todo', todoSchema);