const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('DB Online');
    } catch ( error ) {
        console.log(error);
        throw new Error('Unable to connect to DB');
    }
} 

module.exports = dbConnection;