const mongoose = require ('mongoose');
require('dotenv').config();

const conectarBD = () => {
    // conexion con mongodb
    mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log("esta conetada la base de datos mongodb"))
    .catch((err)=> console.error(err));

}
module.exports= conectarBD;