const HTTPStatus = require("http-status-codes");
const repo = require("../repositories/seller");
const jwt = require("jsonwebtoken");

exports.login = (req, res)=>{
    const username=req.body.username;
    const password = req.body.password;
    // 1. Find Seller by username
    repo.findByUsername(username, (err, data)=>{
        if(err){
            return res.status(HTTPStatus.StatusCodes.INTERNAL_SERVER_ERROR).send(err);
        }
        else{
            if(!data){
                return res.status(HTTPStatus.StatusCodes.BAD_REQUEST).send("Username is incorrect");
            }
            const seller = data;
            console.log(seller);
            // 2. Verify the password
            if(seller.password==password){
                // 3. Generate token
                const token = jwt.sign(
                    {sellerid:seller._id, username: seller.username},
                    "THISISMYPRIVATEKEY",
                    {
                        expiresIn: "2h"
                    }
                    );
                const authResponeModel = {
                    id:seller._id,
                    username:seller.username,
                    token: token
                }
                res.status(HTTPStatus.StatusCodes.OK).send(authResponeModel);
            }else{
                res.status(HTTPStatus.StatusCodes.BAD_REQUEST).send("Password is incorrect");
            }
        }
    })
}