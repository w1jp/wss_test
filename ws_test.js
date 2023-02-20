const WebSocketServer = require('ws');

// create new server
const wss = new WebSocketServer.Server({port: 8080});

wss.on('connection', ws => {
	console.log('New connection started.');
	ws.send('Welcome, you are connected!');
	ws.on('message', msg => {
		console.log(`Client sent us: ${msg}`);
		// echo back to them.
		ws.send('You sent: '+msg);
		// handle disconnect
		ws.on('close', () => {console.log('Client disconnected.')});
		ws.onerror = ()=>{console.log('Something bad happened!')};
	});
})
console.log('WebSocket server running on port 8080');
