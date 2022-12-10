const Proveedores = require('../models/Proveedores');

exports.mostrarProveedores = async (req,res) => {

try {
const proveedores = await Proveedores.find();
res.json(proveedores);

} catch (error) {
    console.log(error);
    res.status(500).send("error al consultar los provedores");
}
   
}

exports.agregarProveedores = async (req,res) => {

    try {
        let proveedor;
        proveedor = new Proveedores(req.body)

        await proveedor.save();
        res.send(proveedor);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("error al agregar los provedores");    
    }

}


exports.mostrarunProveedor   = async (req,res) => {

    try {

        let  proveedor = await Proveedores.findById(req.params.id);
        
        if(!proveedor){
            
             res.status(404).json({ msg: " no podemos encontrar el proveedor "});
        }

        res.send(proveedor);



    } catch (error) {
        console.log(error);
        res.status(500).send("error al ver un provedor");   
    }


}

exports.eliminarProveedor  = async (req,res) => {

    try {

        let  proveedor = await Proveedores.findById(req.params.id);
        
        if(!proveedor) {

            res.status(404).json({ msg: " no existe el proveedor "});
            return
        }
        await Proveedores.findOneAndRemove({_id:req.params.id});
        res.json({msg:"el proveedor fue eliminado"})

    } catch (error) {
        
        console.log(error);
        res.status(500).send("error de conexion"); 

    }
}

// funcion para actualizar 
exports.actualizarProveedor   = async (req,res) => {

    try {

        const{nombres,apellidos,correo,telefono,cuidad} = req.body;

        let  proveedor = await Proveedores.findById(req.params.id);

        if(!proveedor) {

            res.status(404).json({ msg: " no existe el proveedor "});
            return
        }
        proveedor.nombres=nombres;
        proveedor.apellidos=apellidos;
        proveedor.correo=correo;
        proveedor.telefono=telefono;
        proveedor.cuidad=cuidad;
        
        
        proveedor = await Proveedores.findOneAndUpdate({_id: req.params.id}, proveedor, {new: true});
        rest.json(proveedor);


    } catch (error) {
        
        console.log(error);
        res.status(500).send("error al ver un provedor"); 
    }
}
