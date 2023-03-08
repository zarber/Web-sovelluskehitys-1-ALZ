var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res) {
  res.json({
    data: req.params.id,
  });
});

router.post('/', function(req, res) {
  return res.json({
    data: null,
    message: 'Data successfully created'
  })
});

router.put('/:id', function(req, res) {
  return res.json({
    data: null,
    message: 'Data successfully updated.'
  });
});

router.delete('/:id', function(req, res) {
  return res.json({
    data: null,
    message: 'Data successfully deleted'
  });
});

module.exports = router;