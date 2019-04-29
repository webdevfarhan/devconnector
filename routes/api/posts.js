const express = require('express');
const app = express();
const router = express.Router();

/*
@route GET api/Posts
@desc Test route
@access Public
*/

router.get('/', (req, res) => {
  res.send('Posts route');
});

module.exports = router;
