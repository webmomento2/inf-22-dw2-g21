const router = require('express').Router();
const serieController = require('../controllers/serieController')
const auth  = require('../controllers/authController');

router.get('/', serieController.list);
router.post('/', auth, serieController.create);
router.put('/:id', auth, serieController.update);
router.get('/:id', auth, serieController.listOne);
router.delete('/:id', auth, serieController.deleteOne);


module.exports = router;