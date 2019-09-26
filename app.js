const express = require('express');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();

const userRouter = require('./routes/user');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => console.log('DB Connected'));

app.use('/api', userRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});