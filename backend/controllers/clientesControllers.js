const Clientes = require('../models/Clientes');

exports.mostrarClientes = async (req,res) => {

try {
const clientes = await Clientes.find();
res.json(clientes);

} catch (error) {
    console.log(error);
    res.status(500).send("error al consultar los clientes");
}
   
}

exports.agregarClientes = async (req,res) => {

    try {
        let cliente;
        cliente = new Clientes(req.body)

        await cliente.save();
        res.send(cliente);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("error al agregar los clientes");    
    }

}


exports.mostrarunCliente   = async (req,res) => {

    try {

        let  cliente = await Clientes.findById(req.params.id);
        
        if(!cliente){
            
             res.status(404).json({ msg: " no podemos encontrar el cliente "});
        }

        res.send(cliente);



    } catch (error) {
        console.log(error);
        res.status(500).send("error al ver un cliente");   
    }


}

exports.eliminarCliente  = async (req,res) => {

    try {

        let  cliente = await Clientes.findById(req.params.id);
        
        if(!cliente) {

            res.status(404).json({ msg: " no existe el cliente "});
            return
        }
        await Clientes.findOneAndRemove({_id:req.params.id});
        res.json({msg:"el cliente fue eliminado"})

    } catch (error) {
        
        console.log(error);
        res.status(500).send("error de conexion"); 

    }
}

// funcion para actualizar 
exports.actualizarCliente   = async (req,res) => {

    try {

        const{nombre,apellido,telefono,ciudad,correo} = req.body;

        let  cliente = await Clientes.findById(req.params.id);

        if(!cliente) {

            res.status(404).json({ msg: " no existe el cliente "});
            return
        }
        cliente.nombre=nombre;
        cliente.apellido=apellido;
        cliente.telefono=telefono;
        cliente.ciudad=ciudad;
        cliente.correo=correo;
        
        cliente = await Clientes.findOneAndUpdate({_id: req.params.id}, cliente, {new: true});
        res.json(cliente);


    } catch (error) {
        
        console.log(error);
        res.status(500).send("error al ver un cliente"); 
    }
}