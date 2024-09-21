const mongoose = require('mongoose');

const MONGO_URL =
  'mongodb+srv://alfarukky:uXxtZhpGR3%24%407L%21@cluster0.tseew37.mongodb.net/nasa';

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err.errmsg, err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
