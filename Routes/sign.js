import express from "express" 
import {register,login,getByid} from "../Controller/sign.js";

const routes=express.Router();

routes.post("/register",register)
routes.post("/login",login)
routes.get("/getByid",getByid)
routes.post("")

export default routes;