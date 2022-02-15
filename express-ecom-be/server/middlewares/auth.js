const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next)=>{
    // 1. Read token
    const token = req.headers["authorization"];
    if(!token){
        return res.status(403).send("Authorization Token is required");
    }
    try{
        const decodedData = jwt.verify(token, "THISISMYPRIVATEKEY");
        req.user = decodedData;
        console.log(req.user);
    }
    catch(err){
        return res.status(401).send("Invalid token");
    }
    next();
}

module.exports = verifyToken;