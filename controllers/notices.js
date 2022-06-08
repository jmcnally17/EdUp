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

  Delete: (req, res) => {
    Notice.findByIdAndRemove(req.params.id, function (err, docs) {
      if (err) res.json(err);
      else res.status(201);
    });
  },
};

module.exports = NoticesController;
