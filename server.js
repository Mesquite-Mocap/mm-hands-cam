const ws = require('ws');
// client
const client = new ws('ws://mmdongle.local:80/hub');
client.on('open', () => {
  console.log('connected');
  client.send('Hello!');
});
client.on('message', data => {
    console.log(data);
    }
);
client.on('close', () => {
    console.log('disconnected');
    process.exit(0);
    }
);


const Tail = require('tail-file');
const mytail = new Tail("log", line => {
  console.log( line );
  ws.send( line );
});