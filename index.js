const express = require("express");
const connection = require("./config/db");
const PORT = 3005;
const app = express();
app.get("/",(req,res)=>{
    res.send("going fine");
});
app.listen(PORT,async()=>{
     
      try {
        await connection ;
        console.log(`server is running on port :${PORT} and connected to db`);  
      } catch (error) {
        console.log(`error in connecting db ${error}`);
        
      }
 
})