var Cookies = require("cookies")
, keygrip = require("keygrip")
, tako = require("tako")
, EE = require("events").EventEmitter

var cookieMiddle = module.exports = new EE()
tako.globalMiddles.cookies = tako.globalMiddles.cookies || cookieMiddle

cookieMiddle.on("request", function (req, res) {
  req.cookies = res.cookies = new Cookies(req, res, keygrip)
})
