const Inventarios = require('../models/Inventarios');

exports.mostrarInventarios = async (req,res) => {

try {
const inventarios = await Inventarios.find();
res.json(inventarios);

} catch (error) {
    console.log(error);
    res.status(500).send("error al consultar el inventario");
}
   
}

exports.agregarInventarios = async (req,res) => {

    try {
        let inventario;
        inventario = new Inventarios(req.body)

        await inventario.save();
        res.send(inventario);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("error al agregar el inventario");    
    }

}


exports.mostrarunInventario   = async (req,res) => {

    try {

        let  inventario = await Inventarios.findById(req.params.id);
        
        if(!inventario){
            
             res.status(404).json({ msg: " no podemos encontrar el inventarios "});
        }

        res.send(inventario);



    } catch (error) {
        console.log(error);
        res.status(500).send("error al ver un provedor");   
    }


}

exports.eliminarInventario  = async (req,res) => {

    try {

        let  inventario = await Inventarios.findById(req.params.id);
        
        if(!inventario) {

            res.status(404).json({ msg: " no existe el proveedor "});
            return
        }
        await Inventarios.findOneAndRemove({_id:req.params.id});
        res.json({msg:"el inventario fue eliminado"})

    } catch (error) {
        
        console.log(error);
        res.status(500).send("error de conexion"); 

    }
}

// funcion para actualizar 
exports.actualizarInventario   = async (req,res) => {

    try {

        const{detalle,unidaddemedida,cantidad,costounitario,estado,total} = req.body;

        let  inventario = await Inventarios.findById(req.params.id);

        if(!inventario) {

            res.status(404).json({ msg: " no existe el proveedor "});
            return
        }
        inventario.detalle=detalle;
        inventario.unidaddemedida=unidaddemedida;
        inventario.cantidad=cantidad;
        inventario.costounitario=costounitario;
        inventario.estado=estado;
        inventario.total=total;
        
        
        inventario = await Inventarios.findOneAndUpdate({_id: req.params.id}, inventario, {new: true});
        rest.json(inventario);


    } catch (error) {
        
        console.log(error);
        res.status(500).send("error al ver el inventario"); 
    }
}