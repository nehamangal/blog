const express= require("express")
const router = express.Router();
const getalluser= require('../Controllers/user_controllers')
const signup=require('../Controllers/signup')
const login=require('../Controllers/login')


router.route('/').get(getalluser);
router.route('/sign').post(signup);
router.route('/login').post(login);

module.exports=router