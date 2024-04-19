const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    difficulty: {
        type: String,
        enum: ['Easy ', 'Medium', 'Hard']
    },
    testCases: [{

        input: {
            type: String,
            require: true
        },
        output: {
            type: String,
            require: true
        }
    }]
});

const problemSchema = new mongoose.model('Problem-Collection', schema);
module.exports = problemSchema;