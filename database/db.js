const mongoose = require("mongoose");
require("dotenv").config();

const database = mongoose.connect(
    process.env.DB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify : false,
        useCreateIndex: true
    },
    (error) => {
        if (!error){
            console.log("Connected to mongoDB");
        }
        else {
            console.log("Connection to mongoDB failed \n" + error);
        }
    }
)