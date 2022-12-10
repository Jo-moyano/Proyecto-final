const express = require ('express');
const router = express.Router();
const materialesController = require ('../controllers/materialesControllers');


// rutas crud

router.get('/',materialesController.mostrarmateriales);
router.post('/',materialesController.agregarmateriales);
router.get('/:id',materialesController.mostrarunmaterial);
router.delete('/:id',materialesController.eliminarmaterial);
router.put('/:id',materialesController.actualizarmaterial);

module.exports = router;