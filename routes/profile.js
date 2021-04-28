var express = require('express');
var router = express.Router();
const { findProfil,createProfile} = require('../Controllers/profile');
const auth = require('../middleware/auth');
/* GET users listing. */
 router.post('/',auth, createProfile);

/* GET users listing. */
  router.get('/me',auth, findProfil);
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
