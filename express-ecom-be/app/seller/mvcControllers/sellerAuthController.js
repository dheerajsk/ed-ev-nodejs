
const sellerRepo = require("../repositories/seller");

exports.getLoginView = (req, res)=>{
    res.render("login");
}

exports.login = (req, res)=>{
    const username=req.body.username;
    const password = req.body.password;
    sellerRepo.findByUsername(username, (err, user)=>{
        if(err){
            res.send("invalid creds");
        }
        if(user.password==password){
            req.session.authenticated=true;
            req.session.user=user;
            // console.log("Password match");
            res.redirect("../seller/product");
            // create session
        }else{
            res.render("login", {error:"Invalid Creds"});
        }
    });
}

exports.logout = (req, res)=>{
    req.session.authenticated=false;
    req.session.user=null;
    res.redirect("../seller/login");
}