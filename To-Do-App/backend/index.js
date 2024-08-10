// write basic boilerplate code

const express = require("express")
const {createTodo} = require("./types")
const {updatetodo} = require("./types")
const {todos} = require("./db")
const cors =  require('cors')

const app = express();
app.use(express.json());
app.use(cors())

app.post("/todos",async (req,res)=>{
    const payload = req.body;
    const parsedPayload = createTodo.safeParse(payload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg:'You have sent the wrong input data'
        })
        return
    }
    //put it in mongodb

    await todos.create({
        title:payload.title,
        description:payload.description,
        completed: false
    })

    res.json({
        msg:"Todo Created successfully"
    })
})

app.get("/todos",async function (req,res){
    const todoList = await todos.find()

    res.json({
        todoList
    })

})

app.put("/completed",async (req,res)=>{
    const payload = req.body;
    const parsedPayload = updatetodo.safeParse(payload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg:'You have sent the wrong input data'
        })
        return
    }

    await todos.update({
        _id:req.body.id
    },{
        completed:true
    })

    res.json({
        msg:"Todos marked as completed"
    })

    
})

app.listen(3000)
