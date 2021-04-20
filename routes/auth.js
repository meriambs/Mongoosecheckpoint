var express = require('express');
var router = express.Router();
const { findAuth} = require('../Controllers/auth');

/* GET users listing. */
// router.post('/', createUser);

/* GET users listing. */
 router.get('/', findAuth);
// router.get('/:id', findUsers);

// // // update 
// router.put('/name/:name',findandUpdate);
// router.put('/:id',updateUser);

// // //delete
// router.delete('/multi',findandRemove);
//  router.delete('/:id',deleteUser);
// // // chain Search query:
// router.post('/querychain',findQuery);
module.exports = router;
