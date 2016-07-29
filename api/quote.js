var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/quote', function(req, res, next) {
  knex('quote').select().then(function(data){
    res.json({data: data})
  })
});

router.get('/quote/:id', function(req, res, next){
  knex('quote').select().then(function(data){
    res.json({data: data})
  })
})

router.post('/quote', function(req, res, next){
  knex('quote').insert(req.body).then(function(){
    res.end()
  })
})

router.put('/quote/:id', function(req, res, next){
  knex('quote').where('quote.id', req.params.id).update(req.body).then(function(){
    res.end()
  })
})

router.delete('/quote/:id', function(req, res, next){
  knex('quote').where('quote.id', req.params.id).del().then(function(){
    res.end()
  })
})

module.exports = router;
