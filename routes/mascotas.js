import express from 'express';
import mascotaController from '../controllers/mascotas.js';

const router = express.Router();

router.post('/', mascotaController.create);
router.get('/:id', mascotaController.getOne);
router.get('/', mascotaController.getAll);
router.put('/:id', mascotaController.update);
router.delete('/:id', mascotaController.delete); 

export default router;