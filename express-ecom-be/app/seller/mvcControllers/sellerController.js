
const productRepository = require("../../product/repositories/product");
const {product} = require("../../../server/config/models");

exports.getAll = (req, res)=>{
    productRepository.getAll((err, data)=>{
        if(err){
        //  res.status(HTTPStatus.StatusCodes.INTERNAL_SERVER_ERROR).send(err);
        }else{
         // Return views.
            res.render("seller-products", {products: data});
        }
    })
 }

 exports.get = (req, res)=>{
    const productID = req.params.id;
    productRepository.get(productID, (err, data)=>{
        if(err){
            // res.status(HTTPStatus.StatusCodes.INTERNAL_SERVER_ERROR).send(err);
        }else{
            if(!data){
                // res.status(HTTPStatus.StatusCodes.BAD_REQUEST).send("Product doesn't exist");
            }
            res.render("seller-product-detail", {product:data});
        }
    })
}

exports.update = (req, res)=>{
    console.log(req.body);
    const productToUpdate = new product(req.body);
    console.log("calling repo");
    productRepository.update(productToUpdate, (data)=>{
        res.redirect("../../seller/product");
    })
}