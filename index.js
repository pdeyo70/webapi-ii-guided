/*const express = require('express');

const Hubs = require('./hubs/hubs-model.js');*/

const server = require('./server.js')

/*server.use(express.json());*/

// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub

server.listen(4000, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});
