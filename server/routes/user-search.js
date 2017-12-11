const express = require('express');
const Publication = require('../models/Publication');
const Relational = require('../models/Relational');
const User = require('../models/User');
const router = express.Router();

router.get('/user-search', (req, res, next) => {
const username = req.body.username

if(!username){
  res.status(400).json({message:"Provide a valid username"});
  return;
};

User.findOne( {'username': username}, (error, user) => {
    if (!user) {
      res.status(400).json({message: "User not found"});
      return;
    } else {
      res.status(200).json(user)
    }
  })
});

router.get('/profile/:id', (req, res, next) => {
  const id = req.user._id;
    Relational
    .find({creator: id })
    .populate('publication')
    .exec((err, relation) => {
      res.status(200).json(relation)
    })
});


module.exports = router;
