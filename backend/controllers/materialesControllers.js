const Materiales = require('../models/Materiales');

exports.mostrarmateriales = async (req,res) => {

try {
const materiales = await Materiales.find();
res.json(materiales);

} catch (error) {
    console.log(error);
    res.status(500).send("error al consultar los maeriales");
}
   
}

exports.agregarmateriales = async (req,res) => {

    try {
        let maeriales;
        maeriales = new Materiales(req.body)

        await material.save();
        res.send(material);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("error al agregar los materiales");    
    }

}


exports.mostrarunmaterial   = async (req,res) => {

    try {

        let  material = await Materiales.findById(req.params.id);
        
        if(!material){
            
             res.status(404).json({ msg: " no podemos encontrar el material "});
        }

        res.send(material);



    } catch (error) {
        console.log(error);
        res.status(500).send("error al ver un material");   
    }


}

exports.eliminarmaterial  = async (req,res) => {

    try {

        let  material = await Materiales.findById(req.params.id);
        
        if(!material) {

            res.status(404).json({ msg: " no existe el material "});
            return
        }
        await Materiales.findOneAndRemove({_id:req.params.id});
        res.json({msg:"el material fue eliminado"})

    } catch (error) {
        
        console.log(error);
        res.status(500).send("error de conexion"); 

    }
}

// funcion para actualizar 
exports.actualizarmaterial   = async (req,res) => {

    try {

        const{detalle,unidaddemedida,categoria,costounitario,estado} = req.body;

        let  material = await Materiales.findById(req.params.id);

        if(!material) {

            res.status(404).json({ msg: " no existe el material "});
            return
        }
        material.detalle=detalle;
        material.unidaddemedida=unidaddemedida;
        material.categoria=categoria;
        material.costounitario=costounitario;
        material.estado=estado;
        
        material = await Materiales.findOneAndUpdate({_id: req.params.id}, material, {new: true});
        rest.json(material);


    } catch (error) {
        
        console.log(error);
        res.status(500).send("error al ver un material"); 
    }
}