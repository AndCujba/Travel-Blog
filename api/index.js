const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth"); //authentification route
const userRoute = require("./routes/users");  //updating params of users by id
const postRoute = require("./routes/posts");

dotenv.config();
app.use(express.json()); //pentru a fptea trimite obiecte in format json

mongoose
.connect(process.env.MONGO_URL)
.then(console.log("connected to mongoDB."))
.catch((err) => console.log(err));
 
app.use("/api/auth", authRoute); //pentru autentificare
app.use("/api/users", userRoute); 
app.use("/api/posts", postRoute); 

app.listen(5000, ()=>{
    console.log("Backend running");
}) 