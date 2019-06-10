const mongoose = require("mongoose");
//mongodb://dominio:porta/nome_database
const MONGO_URL = "mongodb:localhost:27017/reprograma"

function connect () {
  //TODO: conectar no nosso mongo usando o MONGO_URL
  mongoose.connect(MONGO_URL, 
    {useNewUrlParser: true},
    error => {
      if(error) {
        console.error("Deu erro: ", error)
      } else {
        console.log("conectamos no mongo!!!")
      }
    }
    );
}

module.exports = { connect }