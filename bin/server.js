const { mkdir } = require('fs/promises');

const mongoose = require('mongoose');

const app = require('../app');

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('Database connection successful');
    app.listen(PORT, async () => {
      await mkdir(process.env.UPLOAD_FOLDER, { recursive: true });
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });

mongoose.connection.on('connected', () => {
  console.log('Connected to Database');
});

mongoose.connection.on('error', err => {
  console.log(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from Database');
});
