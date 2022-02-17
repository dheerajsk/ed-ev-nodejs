
const productRepository = require("../../product/repositories/product");
const {product} = require("../../../server/config/models");

exports.getAll = (req, res)=>{
    // console.l
    productRepository.getBySellerID(req.session.user._id, (err, data)=>{
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

exports.add = (req, res)=>{
    console.log("Add req");
    req.body.sellerID=req.session.user._id;
    const productToAdd = new product(req.body);
    productRepository.add(productToAdd, (err, data)=>{
        if(err){
        //    res.status(HTTPStatus.StatusCodes.INTERNAL_SERVER_ERROR).send(err);
        }else{
            res.redirect("../product");
        }
    });
}

exports.update = (req, res)=>{
    const productToUpdate = new product(req.body);
    productRepository.update(productToUpdate, (data)=>{
        res.redirect("../product");
    })
}

exports.getAddView = (req, res)=>{
    res.render("product-new");
}