const router = require('express').Router();
const filmeController = require('../controllers/filmeController');
const auth  = require('../controllers/authController');


router.get('/', filmeController.list);
router.post('/', auth, filmeController.create);
router.put('/:id', auth, filmeController.update);
router.get('/:id', auth, filmeController.listOne);
router.delete('/:id', auth, filmeController.deleteOne);


module.exports = router;