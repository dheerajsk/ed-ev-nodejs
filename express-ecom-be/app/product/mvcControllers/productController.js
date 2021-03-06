const {product} = require("../../../server/config/models");
const repository = require("../repositories/product");

exports.getAll = (req, res)=>{
    repository.getAll((err, data)=>{
        if(err){
        //  res.status(HTTPStatus.StatusCodes.INTERNAL_SERVER_ERROR).send(err);
        }else{
         // Return views.
            res.render("products", {products: data});
        }
    })
 }

 exports.get = (req, res)=>{
    const productID = req.params.id;
    repository.get(productID, (err, data)=>{
        if(err){
            // res.status(HTTPStatus.StatusCodes.INTERNAL_SERVER_ERROR).send(err);
        }else{
            if(!data){
                // res.status(HTTPStatus.StatusCodes.BAD_REQUEST).send("Product doesn't exist");
            }
            res.render("product-detail", {product:data});
        }
    })
}