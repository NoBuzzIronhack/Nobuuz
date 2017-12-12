const express = require('express');
const Publication = require('../models/Publication');
const Relational = require('../models/Relational');
const User = require('../models/User');
const router = express.Router();

router.get('/public-profile/:id', (req, res, next) => {
  Relational
  .find({creator: req.params.id })
  .populate('publication')
  .exec((err, relation) => {
    res.status(200).json(relation)
  })
})

router.post('/public-profile/:id', (req, res, next) => {
  let publicUser = req.params.id;
  User.findByIdAndUpdate(req.body.loggedUserId,{$push: {'following': publicUser}}, {new : true},)
  .then(user => {
    console.log(user);
    res.json(user)
  })
})


module.exports = router;
