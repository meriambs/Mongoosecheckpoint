var express = require('express');
var router = express.Router();
const { findUsers, createUser} = require('../Controllers/users');

/* GET users listing. */
router.post('/', createUser);

/* GET users listing. */
 router.get('/', findUsers);
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
