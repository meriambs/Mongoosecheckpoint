var express = require('express');
var router = express.Router();
const { findProfil} = require('../Controllers/profile');

/* GET users listing. */
// router.post('/', createProfile);

/* GET users listing. */
  router.get('/', findProfil);
  // router.get('/:id', findProfil);

// // // update 
// router.put('/name/:name',findandUpdate);
// router.put('/:id',updateUser);

// // //delete
// router.delete('/multi',findandRemove);
//  router.delete('/:id',deleteUser);
// // // chain Search query:
// router.post('/querychain',findQuery);
module.exports = router;
