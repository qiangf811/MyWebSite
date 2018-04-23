const mongoose = require('mongoose')
const MenuSchema = require('../schemas/menu')
const Menu = mongoose.model('Menu', MenuSchema)

module.exports = Menu
