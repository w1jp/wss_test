# w1jp wss_test
This is cool stuff
`ws_test.js` is a test websockets server on port 8080. It is useing the ws modeule (`npm i ws`)

Created a client in a broswer via:
```
const websock = new WebSocket('ws://localhost:8080');
websock.onmessage = (evt) => {console.log(evt.data)};
websock.send('Hello World!');
websock.close();
```

