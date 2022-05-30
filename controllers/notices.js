const Notice = require('../models/notice.js');

const NoticesController ={ 
  Create: (req,res) => {
    const noticeInfo = req.body
    const notice = new Notice(noticeInfo);
    notice.save((err) => {
      if(err) {
        throw err;
      }

      res.status(201);
    });
  }
}