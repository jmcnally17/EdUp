const Notice = require("../models/notice.js");

const NoticesController = {
  Index: (req, res) => {
    Notice.find()
      .populate()
      .exec((err, notices) => {
        if (err) {
          throw err;
        }
        let reverse = notices.reverse();
        res.json({
          notices: reverse,
        });
      });
  },
  Create: (req, res) => {
    const noticeInfo = req.body;
    const notice = new Notice(noticeInfo);
    notice.save((err) => {
      if (err) {
        throw err;
      }
      res.status(201).redirect("/");
    });
  },
};

module.exports = NoticesController;
