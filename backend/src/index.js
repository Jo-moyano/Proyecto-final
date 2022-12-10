const express = require ('express');
const conectarBD = require('../config/bd');
const cors = require ('cors');

// creamos el servidor 
const app = express();
const port = 5000;

// enlazar la conexion  
conectarBD();
app.use(cors());
app.use(express.json());

app.use('/api/proveedores', require ('../routes/proveedores'));
app.use('/api/clientes', require ('../routes/clientes'));
app.use('/api/materiales', require ('../routes/materiales'));
app.use('/api/inventarios', require ('../routes/inventarios'));


// mostrar un mensaje en el navegador 
app.get('/' , (req,res) => {
    res.send ("Bienvenido el servidor ya esta configurado, esto se muestra en el navegdor ");
});


app.listen(port, () => console.log("servidor conevtado al puerto" , port ))