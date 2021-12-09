const mongoose = require('mongoose');

const url = process.env.DB_HOST;


const connectToDB = async () => {
     mongoose.connect(url, {'useUnifiedTopology': true, 'useNewUrlParser': true }).then(() => {
         console.log("DB Connected!");
     }).catch((e) => {
         console.log("Error: ", e);
     })
    // console.log(db);
}

connectToDB();
