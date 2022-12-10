const mongoose = require ('mongoose');

//Se coloca el esquema a la base de datos

const materialessSchema = mongoose.Schema({
    detalle:{
        type:String,
        require:true
    },
    unidaddemedida:{
        type:String,
        require:true
    },
    categoria:{
        type:String,
        require:true
    },
    costounitario:{
        type:Number,
        require:true
    },
    estado:{
        type:String,
        require:true
    }
}, {versionkey : false})

module.exports = mongoose.model('Materiales',materialessSchema)