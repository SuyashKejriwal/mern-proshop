import express from 'express';
const router = express.Router();
import asyncHandler from 'express-async-handler'
import Product from '../models/product.js'
// base url is 'api/products'

//@desc Fetch all products
//@route GET /api/products/
//@access Public routes
router.get('/', asyncHandler(async(req, res,next) => {
    const products = await Product.find({})
    //get all products using asyncHandler(async .. await) 
    //throw new Error('Some error')
     res.json(products)
}))

//@desc Fetch Particular Product by id
//@route GET /api/products/:id
//@access Public routes
router.get('/:id', asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        res.json(product);
    }
    else {
        res.status(404)
        throw new Error('Product not found')
    }

}))
 
export default router
