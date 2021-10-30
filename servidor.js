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

router.get('/tarea',(req, res) => {
    TareaSchema.find(function(err, datos){
        if(err){
            console.log("Error leyendo los datos");
        }else{
            res.send(datos);
        }
    })
})

router.post('/tarea',(req, res) =>{
    let nuevaTarea = new TareaSchema({
       idTarea: req.body.id,
       tipodocTarea: req.body.tipodoc,
       numerodocTarea: req.body.numerodoc,
       nombreTarea: req.body.nombre
    });

    nuevaTarea.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("Usuario Almacenado")
    })
})
app.use(router);
app.listen(3000, () => {
    console.log("El servidor se esta ejecutando en el puerto 3000")
});