const mongoose = require ('mongoose');

//Se coloca el esquema a la base de datos

const proveedoresSchema = mongoose.Schema({
    nombre:{
        type:String,
        require:true
    },
    apellido:{
        type:String,
        require:true
    },
    correo:{
        type:String,
        require:true
    },
    telefono:{
        type:Number,
        require:true
    },
    ciudad:{
        type:String,
        require:true
    }
}, {versionkey : false})

module.exports = mongoose.model('Proveedores',proveedoresSchema)