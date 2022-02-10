
const productModel = require("../models/product");

exports.add = (model, cb)=>{
    model.save()
        .then((data)=>{
            console.log(data);
            cb(null, data);
        },
        err=>cb(err, null));
}