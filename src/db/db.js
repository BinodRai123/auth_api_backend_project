const mongoose = require("mongoose");

function ConnectToDB(){
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("DB is connected");
    }).catch(err => {
        console.log(`something went wrong ${err}`);
    })
}


module.exports = ConnectToDB;