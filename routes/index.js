var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Armando',
    added: new Date()
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

/* GET new message page. */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New Message'});
});

/* POST a new message. */
router.post('/new', function(req, res, next) {
  body = req.body;
  messages.push({text: body.msg, user: body.name, added: new Date()});
  res.redirect('/');
})

module.exports = router;
