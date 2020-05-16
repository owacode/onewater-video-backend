const mongoose= require('mongoose');
const validator=require('mongoose-unique-validator');

const newuser=mongoose.Schema({
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    lastlogin:{type:String}
})

newuser.plugin(validator);
module.exports=mongoose.model('UsersInfo', newuser, 'AdminUsers');
