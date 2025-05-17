import express from 'express';
import{
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
} from '../controllers/productController.js';

const router = express.Router();

router.get('/', getAllProducts);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;