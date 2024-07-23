const zod = require('zod');

const todoDetailsSchema = zod.object({
    title: zod.string().min(3).max(20),
    description: zod.string().min(5).max(50),
});

const todoIdSchema = zod.object({
    id: zod.string(),
});

module.exports = {
    todoDetailsSchema,
    todoIdSchema
}