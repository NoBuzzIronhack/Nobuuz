const express = require('express');
const Publication = require('../models/Publication');
const Relational = require('../models/Relational');
const User = require('../models/User');
const router = express.Router();

router.get('/newsfeed', (req, res, next) => {
  let user = req.user;
  console.log(user.following);
  Relational.find({ creator: { $in: user.following } })
  .populate('publication')
  .populate('creator')
  .exec((err, relation) => {
    console.log(relation)
    res.status(200).json(relation)
  })
})

module.exports = router;
