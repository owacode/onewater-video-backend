const express= require('express');
const route=express.Router();
const bcrypt= require('bcryptjs');
const jwt= require('jsonwebtoken');

// const middleware=require('../middleware/middleware');
const UsersInfo= require('../model/user');

route.post('/newuser',(req, res)=>{
    bcrypt.hash(req.body.password,10)
    .then(hashpassword=>{
        const user=new UsersInfo({
            email:req.body.email,
            password:hashpassword,
            lastlogin:'Not Login Yet'
        })
        user.save()
        .then(response=>{
            res.json({
                msg:"User Added Successfully"
            })
        })
        .catch(err=>{
            res.json({
                msg:"Email Already Exists",
                error:err.errors.email.message
            })
        })
    })
})



route.get('/listUser',(req, res)=>{
        UsersInfo.find({})
        .then(response=>{
            res.json({
                msg:"User Fetch Successfully",
                users:response
            })
        })
        .catch(err=>{
            res.json({
                msg:"Email Already Exists",
                error:err.errors.email.message
            })
        })
    })



route.post('/login',(req,res)=>{
    console.log('hit')
    let user;
    UsersInfo.find({email:req.body.email})
        .then((response)=>{
            //console.log(response);
            user=response[0];
            if(!user){
                return res.json({
                    msg:"Email Not Found"
                })
            }
           return bcrypt.compare(req.body.password,user.password);
        })
        .catch(err=>{
            return res.json({
                msg:"Invalid Email or Password",
                error:err
            })
        })

        .then(response=>{
            if(!response){
               return res.json({
                    msg:"Incorrect Password"
                })
            }
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

            var currentTime = new Date();

            var currentOffset = currentTime.getTimezoneOffset();

            var ISTOffset = 330;   // IST offset UTC +5:30

            var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);

            // ISTTime now represents the time in IST coordinates

            var hoursIST = ISTTime.getHours()
            var minutesIST = ISTTime.getMinutes()

            console.log('datetime',date);
            UsersInfo.update({email:req.body.email},{$set:{lastlogin:`${date}, ${hoursIST}:${minutesIST}`}})
                .then(response=>res.json({message:"login time updated"}))
                .catch(err=>console.log(err));


            const token =jwt.sign({
                email:user.email
            },'${e[cu]r}e!@t#ok%en!for%&@Fore?><?ign!#[A{dm}i]t$')

            return res.json({
                msg:"Login Successfully",
                token:token
            })
        })

})


route.post('/Resetpassword',(req,res)=>{
   //console.log(req.email.email);
   bcrypt.hash(req.body.password,10)
   .then(hashpassword=>{
       //console.log(req.email.email)
    UsersInfo.update({email:req.email.email},{$set:{password:hashpassword}})
    .then(response=>{
        res.json({
            msg:"Password Upadeted"
        })
    })
   })
   .catch(err=>{
       msg:"Password Not Updated"
   })

})

// route.get('/token',middleware,(req,res)=>{
//   res.json({
//       status:"true"
//   })
// }
// )


module.exports=route;
