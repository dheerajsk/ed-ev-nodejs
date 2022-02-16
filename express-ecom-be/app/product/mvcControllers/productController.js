const {product} = require("../../../server/config/models");
const repository = require("../repositories/product");

exports.getAll = (req, res)=>{
    repository.getAll((err, data)=>{
        if(err){
        //  res.status(HTTPStatus.StatusCodes.INTERNAL_SERVER_ERROR).send(err);
        }else{
         // Return views.
            res.render("products");
        }
    })
 }