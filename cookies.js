var Cookies = require("cookies")
, keygrip = require("keygrip")()

module.exports = function (req, res) {
  req.cookies = res.cookies = new Cookies(req, res, keygrip)
}
