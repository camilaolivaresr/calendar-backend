const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
       await mongoose.connect( process.env.DB_CNN);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    dbConnection
}