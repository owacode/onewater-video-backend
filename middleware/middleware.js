const jwt= require('jsonwebtoken');

module.exports=(req,res,next)=>{
   try{
    console.log("hit45")
    const token =req.headers.authorization.split(" ")[1];
    console.log("hit",token)
    const verification_result= jwt.verify(token,'${e[cu]r}e!@t#ok%en!for%&@Fore?><?ign!#[A{dm}i]t$');
    req.email= {email:verification_result.email};
    //console.log(req.email);
    next();
   }
   catch(err){
        return res.json({
            msg:"Authorization Required",
            status:"false",
            error:err
        })
}
}

