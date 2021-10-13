const express = require('express');
const router = express.Router();
const fileDB = require('../fileDb.js');
const { nanoid } = require("nanoid");
const ID = nanoid();

router.get('/', (req, res) => {
  if (req.query.datetime === undefined) {
    const messages = fileDB.getItems();
    res.send(messages);
    return
  } else {
    const date = Date.parse(req.query.datetime);
    const lastMessages = fileDB.getLasts(date);
    res.send(lastMessages);
  }
});

router.post('/', (req, res) => {
  if (req.body.message !== '') {
    const currentDate = new Date();
    const body = {...req.body, datetime: currentDate, id: ID}
    fileDB.addItem(body);
    res.setHeader('content-type', 'application/JSON');
    res.send(JSON.stringify(body));
  } else {
    res.status(400).send(JSON.stringify({"error":"Message must be present in the request"}))
  }
});

module.exports = router;