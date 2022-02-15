// Controllers
// - Handle request 
// - Send response
// - shouldn't have any business logic - (BLL)
// - shouldn't have any data related code. - (DAL/repositories)

const {product} = require("../../../server/config/models");
const repository = require("../repositories/product");
const HTTPStatus = require("http-status-codes");
const fs = require("fs");

exports.getAll = (req, res)=>{
   repository.getAll((err, data)=>{
       if(err){
        res.status(HTTPStatus.StatusCodes.INTERNAL_SERVER_ERROR).send(err);
       }else{
        res.send(data);
       }
   })
}


exports.getBySellerID = (req, res)=>{
    const sellerID = req.params.id;
    repository.getBySellerID(sellerID, (err, data)=>{
        if(err){
         res.status(HTTPStatus.StatusCodes.INTERNAL_SERVER_ERROR).send(err);
        }else{
         res.send(data);
        }
    })
}

exports.get = (req, res)=>{
    const productID = req.params.id;
    repository.get(productID, (err, data)=>{
        if(err){
            res.status(HTTPStatus.StatusCodes.INTERNAL_SERVER_ERROR).send(err);
        }else{
            if(!data){
                res.status(HTTPStatus.StatusCodes.BAD_REQUEST).send("Product doesn't exist");
            }
            res.send(data);
        }
    })
}

exports.add = (req, res)=>{
    const obj = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: {
            data:fs.readFileSync("../uploads/"+req.file.filename),
            contentType: 'image/jpeg'
        }
    };
    repository.add(obj, (err, data)=>{
        if(err){
            res.status(HTTPStatus.StatusCodes.INTERNAL_SERVER_ERROR).send(err);
        }else{
            res.send(data);
        }
    });
}

exports.update = (req, res)=>{
    const productToUpdate = new product(req.body);
    console.log("calling repo");
    repository.update(productToUpdate, (data)=>{
        res.send(data);
    })
}

exports.delete = (req, res)=>{
    const productID = req.params.id;
    repository.get(productID, (err, data)=>{
        if(data){
            if(data.sellerID==req.user.sellerid){
                repository.delete(productID, (err)=>{
                    if(err){      
                        res.status(HTTPStatus.StatusCodes.INTERNAL_SERVER_ERROR).send(err);     
                    }else{
                        res.status(HTTPStatus.StatusCodes.OK).send("Product is deleted");
                    }
                })
            }else{
                res.status(HTTPStatus.StatusCodes.UNAUTHORIZED).send("Product doesn't belong to you.")
            }
        }
    })
   
}