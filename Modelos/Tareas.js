const mongoose = require("mongoose");

let TareaSchema = new mongoose.Schema({
    idTarea: Number,
    tipodocTarea: String,
    numerodocTarea: Number,
    nombreTarea: String
});

module.exports = mongoose.model('tarea', TareaSchema, 'Tareas');