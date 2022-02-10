// Controllers
// - Handle request 
// - Send response
// - shouldn't have any business logic - (BLL)
// - shouldn't have any data related code. - (DAL/repositories)

const productModel = require("../models/product");
const repository = require("../repositories/product");
const HTTPStatus = require("http-status-codes");


exports.getAll = (req, res)=>{
    res.end("Get All products");
}

exports.getBySellerID = (req, res)=>{
    res.end("Get All products by sller id");
}

exports.get = (req, res)=>{
    res.end("Get one product");
}

exports.add = (req, res)=>{
    const newProduct = new productModel(req.body);
    console.log(newProduct);
    repository.add(newProduct, (err, data)=>{
        if(err){
            res.status(HTTPStatus.StatusCodes.INTERNAL_SERVER_ERROR).send(err);
        }else{
            console.log(data);
            console.log("Else");
            res.send(data);
        }
    })
    
}

exports.update = (req, res)=>{
    res.end("Update product");
}

exports.delete = (req, res)=>{
    res.end("Delete product");
}