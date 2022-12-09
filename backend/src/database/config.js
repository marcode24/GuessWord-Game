const mongoose = require('mongoose');

const { configEnv } = require('../env/config');

mongoose.set('strictQuery', true);

const dbConnection = async () => {
  try {
    await mongoose.connect(configEnv.MONGO_HOST);
    console.log('Database online');
  } catch (error) {
    console.log(error);
    throw new Error('Error a la hora de iniciar la base de datos');
  }
};

module.exports = dbConnection;
