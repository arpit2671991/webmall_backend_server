const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


const dbuser = process.env.DB_USER
const dbpass = process.env.DB_PASS
const dbname = process.env.DB_NAME

const connectDB = async () => {
    try {
      await  mongoose.connect(`mongodb+srv://${dbuser}:${dbpass}@project1312021.xtw4o.mongodb.net/${dbname}?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true
        });

        console.log('Database connected successfully.');

    } catch (err) {
        console.log(err.message)
    }
}

module.exports = connectDB;