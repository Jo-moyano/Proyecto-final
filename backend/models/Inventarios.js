const mongoose = require ('mongoose');

//Se coloca el esquema a la base de datos

const inventariossSchema = mongoose.Schema({
    detalle:{
        type:String,
        require:true
    },
    unidaddemedida:{
        type:String,
        require:true
    },
    cantidad:{
        type:Number,
        require:true
    },
    costounitario:{
        type:Number,
        require:true
    },
    estado:{
        type:String,
        require:true
    },
    total:{
        type:Number,
        require:true
    }

}, {versionkey : false})

module.exports = mongoose.model('Inventarios',inventariossSchema)