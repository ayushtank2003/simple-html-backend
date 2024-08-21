const express = require("express");
const { createUser } = require("../controller/UserControler");
const UserRouter=express.Router();

UserRouter.post("/",createUser);

module.exports=UserRouter;