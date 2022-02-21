
const rateLimit = require("express-rate-limit");

module.exports.limiter = new rateLimit({
    windowMS: 1000*60*10, // 15 minutes.
    max: 100, // Limit 100 requests per 15 mins from a single IP.
});

