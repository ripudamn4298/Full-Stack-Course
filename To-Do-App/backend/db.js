// create mongo db instance

const mongoose = require('mongoose')
// const { boolean } = require('zod')

mongoose.connect("mongodb+srv://ripudaman:Ripu05mongodb@cluster0.chd89x8.mongodb.net/")

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todos = mongoose.model('ToDos',todoSchema)

module.exports = {
    todos: todos
}
