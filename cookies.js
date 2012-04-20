var Cookies = require("cookies")
, keygrip = require("keygrip")
, tako = require("tako")
, EE = require("events").EventEmitter

module.exports = function (req, res) {
  req.cookies = res.cookies = new Cookies(req, res, keygrip)
}
