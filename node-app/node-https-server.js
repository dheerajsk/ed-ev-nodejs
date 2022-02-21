
// NodeJS Core Module.
const https = require("https");
const cors = require("cors");


// express instance
const expressServer = require("express")();

// expressServer.use(cors({""}))
// expressServer.use("/api/user", userRoutes)


https.createServer({}, expressServer).listen(3400);
console.log("HTTPS Server is listening on 3400");