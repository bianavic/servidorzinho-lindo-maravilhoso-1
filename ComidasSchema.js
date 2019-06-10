const mongoose = require("mongoose");
//cada schema equivale collection
const Schema = mongoose.Schema;
const ComidasSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    nome: { type: String, required: true },
    descricao: { type: String } // required fica opcional

})

const comidas = mongoose.model("comidas", ComidasSchema);
modules.export = comidas;