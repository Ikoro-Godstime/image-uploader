const cloudinary = require('cloudinary').v2

// configure multer

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
})
module.exports = cloudinary
