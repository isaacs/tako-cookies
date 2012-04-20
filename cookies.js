var Cookies = require("cookies")
, keygrip = require("keygrip")
, tako = require("tako")
, EE = require("events").EventEmitter

var cookieMiddle = tako.globalMiddles.cookies = cookieMiddle = new EE()
cookieMiddle.on("request", function (req, res) {
  req.cookies = res.cookies = new Cookies(req, res, keygrip)
})
