var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');
const {findPost ,getPosts,getPostsidii,  likePost,  deletePost
} = require('../Controllers/posts');
const Post = require('../Models/Post');
const User = require('../Models/User');
const Profile = require('../Models/Profile'); 
/* GET users listing. */
// router.post('/', createUser);

/* post users listing. */
 router.post('/', auth,findPost);
// router.get('/:id', findUsers);
/*get posts */
router.get('/',auth,getPosts)
// // // get post selon el id 
router.get('/:id',auth,getPostsidii)

// router.put('/name/:name',findandUpdate);
// router.put('/:id',updateUser);

// // //delete
// router.delete('/multi',findandRemove);
  router.delete('/:id',auth,deletePost);
// // // chain Search query:
//like comment 
router.post('/like/:id',auth,likePost);
// router.post('/querychain',findQuery);
module.exports = router;
