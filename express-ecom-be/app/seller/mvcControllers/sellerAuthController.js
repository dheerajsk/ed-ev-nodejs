
const sellerRepo = require("../repositories/seller");

exports.getLoginView = (req, res)=>{
    res.render("login");
}

exports.login = (req, res)=>{
    console.log(req.body);
    const username=req.body.username;
    const password = req.body.password;
    sellerRepo.findByUsername(username, (err, user)=>{
        if(err){
            res.send("invalid creds");
        }
        if(user.password==password){
            console.log("Password match");
            // create session
        }else{
            console.log("Invalid Credentials");
        }
    });
}