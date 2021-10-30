const express = require('express');
const mongoose = require('mongoose')
const app = express();

// Conexion con la base de datos
mongoose.connect("mongodb+srv://carloslondono:MisionTic2022*@dbmongoc4g38.f1hvw.mongodb.net/Ejercicio1db?retryWrites=true&w=majority")

// Operaciones del Crud.

app.listen(3000, () => {
    console.log("El servidor se esta ejecutando en el puerto 3000")
});