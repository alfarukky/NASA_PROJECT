const http = require('http');
const app = require('./app.js');
const mongoose = require('mongoose');

const { loadPlanetData } = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

//starting the server using our built in http server allows us
//not only respond to http request but to respond
//to other types of request e.g using web socket.
const server = http.createServer(app);

async function startServer() {
  await loadPlanetData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}
startServer();
