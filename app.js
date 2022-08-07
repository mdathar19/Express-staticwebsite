const express = require ("express");
const app = express()
const path =  require('path')


// syntax:  app.get(route , callback) it takes a route and a callback.
// app.use(express.static())
// now we are implementing a complete html and css file to the port from exfressJS. 
// so we have to use built-in middleware(means inbetween of req and res) function of express.
// Which name is express.static 
//Syntax :  express.static(root,[other options]) , it is a built-in module of express, and as we already required
// express funtion here, so we dont need to require this module , because it is the function of express module.
// we have to write app.use(express.static(path))
// so here have to join the index.js path with the main folder path, so we have to use path.join(RootPath,joiningPath)
// so we have to go to the root path first. by using terminal
// we cannot use the path like this "C:\Users\Dell 3340\Desktop\NODE\Express JS\main\public" . 
// we have to pass the path root , so here path.join() comes, we have to require path module .
// remeber in node we use file method to read data, or stream method to read data, but we only able to pass
// one html file, but here we passes all the file with one folder . so here we create web app from server.
// console.log(__dirname);
const staticPath = path.join(__dirname,"/public")
app.use(express.static(staticPath))


app.get("/",(req,res)=>{     // here "/" means HOME page, in node we have to use http.createServer,here inbuilt routes 
    res.send("Hello world")                             
})


app.get("/about",(req,res)=>{ // in node for routing we use if(req.url=="/"){res.end("Hello Home")} remember?
    res.send("Hello i am About")  // but here routing is parameter of get method, we use easily.
})


app.listen(8080,()=>{
    console.log("server listed at the port")

})




