const express = require('express');
const uuid = require('uuid');
const router = express.Router();

router.get('/', (req, res)=>{
  let id = uuid.v4();
  res.json({'uuid': `${id}`});
});

module.exports = router;