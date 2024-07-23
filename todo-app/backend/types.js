const zod = require('zod');

const todoDetailsSchema = zod.object({
    title: zod.string().min(5),
    description: zod.string().min(5),
});

const todoIdSchema = zod.object({
    id: zod.string(),
});

module.exports = {
    todoDetailsSchema,
    todoIdSchema
}