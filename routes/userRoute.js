const router = require('express').Router();
const userController = require('../controllers/userController');
const userFilmesController = require('../controllers/userFilmesController');
const auth  = require('../controllers/authController');

router.get('/', userController.list);
router.post('/', userController.create);
router.put('/:id', auth, userController.update);
router.get('/:id', auth, userController.listOne);
router.delete('/:id', auth, userController.deleteOne);
router.get('/:id/filmes', auth, userFilmesController.list);


module.exports = router;
