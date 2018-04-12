const fs = require('fs')
const Photo = require('../../mongoose/models/photo')
class Upload {
  uploadFiles (req, res) {
    if (req.file) {
      let name = req.file.originalname
      fs.rename('uploads/' + req.file.filename, 'uploads/' + name)
      let photo = new Photo({
        type: req.body.type,
        src: 'uploads/' + name
      })
      photo.save((err, photo) => {
        if (err) {
          return res.status(500)
        }
        res.send('done')
      })
    }
  }
}
module.exports = new Upload()
