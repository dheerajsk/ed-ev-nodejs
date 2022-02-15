
const {seller} = require("../../../server/config/models");

exports.findByUsername = (username, cb)=>{
    seller.findOne({username}).lean()
        .then((seller)=>{
            cb(null, seller)
        }, err=>cb(err, null))
}