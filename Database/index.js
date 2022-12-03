const mongoose = require('mongoose');
require('dotenv').config()

async function connectDB() {
    try {
        await mongoose.connect(
"mongodb+srv://todoapp:todoapptodo@cluster0.oljlevu.mongodb.net/?retryWrites=true&w=majority");
        console.log('connected to database');
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {connectDB};
