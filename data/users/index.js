import express from "expresss";
import users from "./user.js";

const app = express()

app.get("/", (req,res)=>{
  res.send("Server is ready")
})

app.get("/api/user",(req,res)=>{
  res.send(users)
})

const port = process.env.PORT || 3000

app.listen(port,()=>{
  console.log('Server at http://localhost:${port}')
})

const Users = require("./user");
const UserService = require("./userController");

const service = UserService(Users);

module.exports = service;