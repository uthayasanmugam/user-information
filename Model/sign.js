import mongoose from "mongoose";
import Joi from "joi"


const User = mongoose.model('User', new mongoose.Schema({
    
    // fname:{
    //     type:String,
    //     required:true
    // },
    // id:{
    //     type:String,
    //     required:true
    // },
    name:{
        type:String,
        required:true
    },
    email:{
    type:String,
    required:true
    },
    password:{
        type:String,
        required:true
    },
    registration:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    rto:{
        type:String,
        required:true
    },
    
  }));
  
  function validateUser(user) {
    const schema = Joi.object({
    //    id:Joi.string().required(),
       name:Joi.string().required(), 
       email:Joi.string().required(),
       password:Joi.string().required(),
       registration:Joi.string().required(),
       status:Joi.string().required(),
       number:Joi.string().required(),
       type:Joi.string().required(),
       rto:Joi.string().required(),


       
      
    });
  
    return schema.validate(user);
}
export default User ;
export {validateUser};