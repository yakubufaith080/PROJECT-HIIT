const express = require('express');
const { createPost,login,signup, deletePost, getPosts } = require('../controller');

const router = express.Router();


router.post('/login',login);
router.post('/signup',signup);
router.post('/create',createPost);
router.get('/posts',getPosts);
router.post('/delete/:postId',deletePost);

module.exports = router;