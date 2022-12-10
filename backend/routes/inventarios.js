const express = require ('express');
const router = express.Router();
const inventariosController = require ('../controllers/inventariosControllers');


// rutas crud

router.get('/',inventariosController.mostrarInventarios);
router.post('/',inventariosController.agregarInventarios);
router.get('/:id',inventariosController.mostrarunInventario);
router.delete('/:id',inventariosController.eliminarInventario);
router.put('/:id',inventariosController.actualizarInventario);

module.exports = router;