var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');
const {findPost } = require('../Controllers/posts');
const Post = require('../Models/Post');
const User = require('../Models/User');
const Profile = require('../Models/Profile');
/* GET users listing. */
// router.post('/', createUser);

/* GET users listing. */
 router.get('/', auth,findPost);
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
