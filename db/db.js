const mongoose = require('mongoose');

const url = "mongodb+srv://nirav22:nirav22@advance-node-project.4xlae.mongodb.net/flipKart?retryWrites=true&w=majority"


const connectToDB = async () => {
     mongoose.connect(url, {'useUnifiedTopology': true, 'useNewUrlParser': true }).then(() => {
         console.log("DB Connected!");
     }).catch((e) => {
         console.log("Error: ", e);
     })
    // console.log(db);
}

connectToDB();
