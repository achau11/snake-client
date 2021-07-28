const net = require('net');
//establish connection with game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: '50542',
  });

  //interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Connected to game server');
    conn.write('Name: Ahm');
  });  

  conn.on('data', (data) => {
    console.log(data);
  });  
  return conn;
};

module.exports =  { connect }; 