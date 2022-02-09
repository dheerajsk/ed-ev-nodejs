// Controllers
// - Handle request 
// - Send response
// - shouldn't have any business logic - (BLL)
// - shouldn't have any data related code. - (DAL/repositories)


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
    res.end("Add one product");
}

exports.update = (req, res)=>{
    res.end("Update product");
}

exports.delete = (req, res)=>{
    res.end("Delete product");
}