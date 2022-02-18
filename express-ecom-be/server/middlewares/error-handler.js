
const errorHandler = (err, req, res, next)=>{
    console.log(err);
    res.status(500).send("Server Error, Please connect to support");
};

module.exports = errorHandler;