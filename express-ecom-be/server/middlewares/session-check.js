

const check = (req, res, next)=>{
    if(req.session && req.session.authenticated){
        next();
    }else{
        res.send("Session is Expired, Please login");
    }
}

module.exports = check;