const zod =  require("zod")

const todoSchema = zod.object({
    title: zod.string(),
    description:zod.string()
    // completed: zod.boolean()
})

const updatetodo = zod.object({
    id:zod.string()
})

module.exports = {
    createTodo: todoSchema,
    updatetodo:updatetodo
}