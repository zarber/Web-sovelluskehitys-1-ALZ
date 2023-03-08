const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res) {
  /*  

  #swagger.tags = ['Users];
  #swagger.summary = 'Get user by ID';
  #swagger.description = 'API to get user based on user ID';
  #swagger.consumes = ['application/json'];
  #swagger.parameters['id'] = {
          in: 'path',
          required: true,
          type: 'number',
          description: 'User ID that will be search',
          example: 1
  }
  #swagger.responses[200] = {
            description: 'User successfully obtained.',
            schema: { 
              data: 1,
            }
  }
  
  #swagger.security = [{
               "bearer": []
        }] 
  */
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
