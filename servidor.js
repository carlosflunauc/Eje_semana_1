const express = require('express');
const mongoose = require('mongoose');
const TareaSchema = require('./Modelos/Tareas.js')

const app = express();
const router =express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Conexion con la base de datos
mongoose.connect("mongodb+srv://carloslondono:MisionTic2022*@dbmongoc4g38.f1hvw.mongodb.net/Ejercicio1db?retryWrites=true&w=majority")

// Operaciones del Crud.
router.get('/', (req, res) => {
    res.send("El Inicio de la Api Rest")
});

app.listen(3000, () => {
    console.log("El servidor se esta ejecutando en el puerto 3000")
});