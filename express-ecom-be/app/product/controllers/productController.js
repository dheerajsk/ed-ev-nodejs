// Controllers
// - Handle request 
// - Send response
// - shouldn't have any business logic - (BLL)
// - shouldn't have any data related code. - (DAL/repositories)

const productModel = require("../models/product");
const repository = require("../repositories/product");
const HTTPStatus = require("http-status-codes");


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
    res.end("Get All products by sller id");
}

exports.get = (req, res)=>{
    res.end("Get one product");
}

exports.add = (req, res)=>{
    const newProduct = new productModel(req.body);
    repository.add(newProduct, (err, data)=>{
        if(err){
            res.status(HTTPStatus.StatusCodes.INTERNAL_SERVER_ERROR).send(err);
        }else{
            res.send(data);
        }
    })
    
}

exports.update = (req, res)=>{
    const productToUpdate = new productModel(req.body);
    console.log("calling repo");
    repository.update(productToUpdate, (data)=>{
        res.send(data);
    })
}

exports.delete = (req, res)=>{
    res.end("Delete product");
}