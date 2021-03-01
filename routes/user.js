const { Router } = require('express')
const router = Router()
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer')
const User = require('../model')

router.post('/user', upload.single('image'), async (req, res) => {
  try {
    // upload the image first
    const result = await cloudinary.uploader.upload(req.file.path)
    console.log(result)
    // then create and save the user
    let user = new User({
      name: req.body.name,
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
    })
    // Save user
    await user.save()
    res.json(user)
  } catch (e) {
    console.log(e)
  }
})

module.exports = router
