const http = require('http');
require('dotenv').config();
const app = require('./app.js');
const { loadPlanetData } = require('./models/planets.model');
const { mongoConnect } = require('./services/mongo');
const { loadLaunchData } = require('./models/launches.model');

const PORT = process.env.PORT || 4000;

//starting the server using our built in http server allows us
//not only respond to http request but to respond
//to other types of request e.g using web socket.
const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  await loadPlanetData();
  await loadLaunchData();
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}
startServer();
