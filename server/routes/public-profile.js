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



module.exports = router;
