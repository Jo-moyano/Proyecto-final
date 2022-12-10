const express = require ('express');
const router = express.Router();
const clientesController = require ('../controllers/clientesControllers');


// rutas crud

router.get('/',clientesController.mostrarClientes);
router.post('/',clientesController.agregarClientes);
router.get('/:id',clientesController.mostrarunCliente);
router.delete('/:id',clientesController.eliminarCliente);
router.put('/:id',clientesController.actualizarCliente);

module.exports = router;