const joi = require('joi');

const schema = joi.object({
    email:joi.string().required(),
    name:joi.string().required(),
    password:joi.string().required()
})

module.exports= schema;