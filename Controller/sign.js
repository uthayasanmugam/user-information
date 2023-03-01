import bcrypt from "bcrypt";
import jwt  from "jsonwebtoken";
import User,{validateUser} from "../model/sign.js";
const saltRount=10;

const register=(async(req,res)=>{
  const { error } = validateUser(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const email=req.body.email;
  const exUser= await User.findOne({email:email})
  if(exUser){
    res.send('Email is already taken')
  }
  else{
    bcrypt.hash(req.body.password,saltRount, async function (err,hash){
        let user = new User({ 
          name:req.body.name,
          // lname:req.body.lname,
          email:req.body.email,
          password: hash,
          registration:req.body.registration,
          status:req.body.status,
          number:req.body.number,
          type:req.body.type,
          rto:req.body.rto,
      });
        user = await user.save();
        console.log(user);
        res.send(user);
    })

  }
});

const login=(async(req,res)=>{
  
  const email=req.body.email;
  const password=req.body.password
  const exUser= await User.findOne({email:email})
  if(exUser){

      bcrypt.compare(password,exUser.password,async function(err,result){
            if (result) {
              let data=exUser.toObject();
                  const token=jwt.sign({_id:data._id},"mysecretkey")

                  //  res.send(token)
                  console.log("login successfully")
                   res.header("user-reg-token",token).send("login successfully")
                //res.send("login successfully")
            }else{
                res.send("dckghic")
            }
      })

  }
  else{
    
    res.send('Your mail id and password is not matching')
  }


});
export  {register,login};

const getByid=async (req, res) => {
  const user = await User.findById(req.body.id);

  if (!user) return res.status(404).send('The customer with the given ID was not found.');

  res.send(user);
};

export {getByid};



// const login=(async(req,res)=>{
//     const mail=req.body.email;
//     const password=req.body.password;
// const userIn=await User.findOne({email:mail}) 
   
// if(userIn){
//   const data=userIn.toObject();
//   console.log(userIn)
//   res.send(userIn)
// }
// else if(!userIn){
//   console.log("not user")
// }
// })  
// export {sample,login};