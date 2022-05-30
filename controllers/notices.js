const Notice = require('../models/notice.js');

const NoticesController ={ 
  Create: (req,res) => {
    console.log("I am here");
    const noticeInfo = req.body
    console.log(req.body);
    const notice = new Notice(noticeInfo);
    notice.save((err) => {
      if(err) {
        console.log("this didn't work");
        throw err;
      }
      console.log("this did work");
      res.status(201).redirect("/");
    });
  }
}

module.exports = NoticesController;