const mongoose = require('mongoose');

const db_connect =async () => {
    try {
        let result = await mongoose.connect(process.env.DB_URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database connection failed", error);
    }
}
module.exports = db_connect;