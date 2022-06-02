var express = require("express");
var router = express.Router();

router.get("/getChannels", (req, res) => {
  res.json({
    channels: STATIC_CHANNELS,
  });
});

module.exports = router;
