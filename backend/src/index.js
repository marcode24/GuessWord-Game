const app = require('./app');
const dbConnection = require('./database/config');

(async () => {
  await dbConnection();
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
})();
