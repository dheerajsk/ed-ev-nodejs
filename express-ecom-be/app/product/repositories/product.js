
const productModel = require("../models/product");

exports.add = (model, cb)=>{
    model.save()
        .then((data)=>{
            cb(null, data);
        },
        err=>cb(err, null));
}

exports.getAll = (cb)=>{
    productModel.find({})
        .then(
            (data)=>{
                console.log(data);
                cb(null, data)
            },
            err=> cb(err, null)
            );
}

exports.getBySellerID = (_sellerID, cb)=>{
    productModel.find({sellerID: _sellerID})
        .then(
            (data)=>{
                cb(null, data)
            },
            err=> cb(err, null)
            );
}

exports.get = (id, cb)=>{
    productModel.findById(id)
        .then(
            (product)=>{
                cb(null, product);
            },
            err=>cb(err, null)
        )
}

exports.delete = (id, cb)=>{
    productModel.findByIdAndDelete(id)
        .then(
            ()=>{
                cb();
            },
            err=>cb(err)
        );
}

exports.update = (model, callback)=>{
    productModel.findByIdAndUpdate(model._id,model)
        .then(
            (data)=>{
                data.save()
                    .then(
                        (data2)=>{
                            callback(data2, null);
                        },
                        (err)=>{
                            callback(null,err);
                        }
                    )
            },
            (err)=>{
                callback(null,err);
            }
        )
}

// exports.update = (model, cb)=>{
//     productModel.findByIdAndUpdate(model._id, model)
//         .then(
//             (data)=>{
//                 console.log(data);
//                 data.save()
//                     .then(
//                         (result)=>{
//                             cb(result);
//                         }
//                     )
//             }
//         )
// }

// Server is listening on port 3200
// MongoDB connected successfully.
// null
// /var/www/html/express-ecom/app/product/repositories/product.js:32
//                 data.save()
