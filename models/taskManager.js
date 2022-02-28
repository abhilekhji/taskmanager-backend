const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"name field must be present"],
        trim: true,
        maxlength: [20,"name cannot be more then 20 characters"]
    },
    completed: {
        type: String,
        default: false
    },
});

module.exports = mongoose.model('Task', TaskSchema);