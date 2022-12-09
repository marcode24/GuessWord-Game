const joi = require('joi');

const envVarsSchema = joi.object().keys({
  PORT: joi.number().positive().default(5000),
  MONGO_HOST: joi.string().required().description('Mongo DB host url'),
}).unknown();

const { error, value: envVars } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const configEnv = {
  MONGO_HOST: envVars.MONGO_HOST,
  PORT: envVars.PORT,
};

module.exports = { configEnv };
