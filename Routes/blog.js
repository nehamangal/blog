const express=require('express')
const blog_router = express.Router();
const getAllblog=require('../Controllers/blog_data')
const make_blog=require('../Controllers/post_blog')
const update_blog=require('../Controllers/update_blog')
const getSpeecificBlog = require('../Controllers/get_particular_blog')
const delete_blog=require('../Controllers/delete')
const getByuserId=require('../Controllers/user_id_blog')


blog_router.route('/').get(getAllblog)
blog_router.route('/make_blogs').post(make_blog)
blog_router.route('/update_blog/:id').put(update_blog)
blog_router.route('/:id').get(getSpeecificBlog)
blog_router.route('/delete/:id').delete(delete_blog)
blog_router.route('/user/:id').get(getByuserId);


module.exports = blog_router