const mongoose = require('mongoose');
const express = require("express")
const app = express();
mongoose.connect('mongodb+srv://ripudaman:Ripu05mongodb@cluster0.chd89x8.mongodb.net/UserappNew');
app.use(express.json());
const User = mongoose.model('users',{name: String,email:String,password:String});

app.post('/signup',async function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    const userExists = await User.findOne({email:username});
    if(userExists){
        res.status(400).send("User already exists");
    }
    
    const user = new User({name:name,email:username,password:password})
    user.save();
    res.json({
        "msg":"User created successfully!"
    })

})

app.listen(3000);
