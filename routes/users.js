const express=require('express');
const router = express.Router();

const usersController=require('../controllers/users_controller');
const usersPosts=require('../controllers/users_posts');

router.get('/profile',usersController.profile);
router.get('/posts',usersPosts.posts);
module.exports=router;