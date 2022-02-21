
// NodeJS Core Module.
const https = require("https");

// express instance
const expressServer = require("express")();

// expressServer.use("/api/user", userRoutes)


https.createServer({}, expressServer).listen(3400);
console.log("HTTPS Server is listening on 3400");