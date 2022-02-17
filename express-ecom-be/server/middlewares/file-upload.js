
// Step 1: Import Multer package (External via npm)
const multer = require("multer");

// Step 2: Create Storage Function
// DiskStorage method will store the file based on given configuration.
const storageConfig = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, "../uploads/")
    },
    filename:(req, file, cb)=>{
        cb(null, file.originalname+"-"+Date.now())
    }
});

// Step 3: Configure Multer invocation.
    // Internal Steps:
        // 1. Read image property from form-data and upload in given destination
        // 2. Create req body with all text based fields.
        // 3. Use filename as per the specification.
        // 4. Uploads file to destination.
        // 5. call next middleware.

const upload = multer({storage: storageConfig});

module.exports = upload;

