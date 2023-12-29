---
title: "A Comprehensive Socket.IO Cheat Sheet for Real-time Communication in Node.js"
publishedAt: 2021-09-18
description: "Explore the power of Socket.IO for real-time communication in Node.js with this comprehensive cheat sheet. Whether you're a seasoned developer or just diving into the world of Socket.IO, this guide provides a quick reference to help you master the art of emitting messages to clients, handling events, and managing rooms and namespaces."
slug: "socket-io-cheat-sheet-nodejs"
isPublish: true
---

### Socket.IO Cheat Sheet
###
#### Socket.IO is a powerful library for enabling real-time, bidirectional communication between clients and servers. This cheat sheet provides a quick reference for commonly used Socket.IO functionalities in Node.js.

### 
---
### 

### Sending Messages

<br /> <br />

#### Sending to Sender Only

<br />

```javascript
socket.emit('message', "this is a test");
```

<br /> <br />

#### Sending to All Clients Except Sender

<br />

```javascript
socket.broadcast.emit('message', "this is a test");
```

<br /> <br />

#### Sending to All Clients in a Room (Channel) Except Sender

<br />

```javascript
socket.broadcast.to('game').emit('message', 'nice game');
```

<br /><br />

#### Sending to Sender Only if They are in a Specific Room (Channel)

<br />

```javascript
socket.to('game').emit('message', 'enjoy the game');
```

<br /><br />

#### Sending to an Individual Client

<br />

```javascript
socket.broadcast.to(socketid).emit('message', 'for your eyes only');
```

<br /><br />

#### Sending to All Clients (Including Sender)

<br />

```javascript
io.emit('message', "this is a test");
```

<br /><br />

#### Sending to All Clients in a Room (Channel) (Including Sender)

<br />

```javascript
io.in('game').emit('message', 'cool game');
```

<br /><br />

#### Sending to All Clients in a Namespace (Including Sender)

<br />

```javascript
io.of('myNamespace').emit('message', 'gg');
```

<br /><br />

#### Event Listeners

<br />

Event Listener on Server (Can Be Called on Client)
```javascript
socket.on();
```

<br /><br />

#### Initial Connection from a Client

<br />

```javascript
io.sockets.on();
```

<br /><br />

#### Example 2: Node Socket.IO Send

<br />

```javascript
io.on('connect', onConnect);
```

```ts
function onConnect(socket){
  // Sending to the client
  socket.emit('hello', 'can you hear me?', 1, 2, 'abc');

  // Sending to all clients except sender
  socket.broadcast.emit('broadcast', 'hello friends!');

  // Sending to all clients in 'game' room except sender
  socket.to('game').emit('nice game', "let's play a game");

  // Sending to all clients in 'game1' and/or in 'game2' room, except sender
  socket.to('game1').to('game2').emit('nice game', "let's play a game (too)");

  // Sending to all clients in 'game' room, including sender
  io.in('game').emit('big-announcement', 'the game will start soon');

  // Sending to all clients in namespace 'myNamespace', including sender
  io.of('myNamespace').emit('bigger-announcement', 'the tournament will start soon');

  // Sending to a specific room in a specific namespace, including sender
  io.of('myNamespace').to('room').emit('event', 'message');

  // Sending to individual socketid (private message)
  io.to(`${socketId}`).emit('hey', 'I just met you');

  // Sending with acknowledgement
  socket.emit('question', 'do you think so?', function (answer) {});

  // More examples...
}
```
This cheat sheet is your go-to resource for mastering Socket.IO in Node.js. Whether you're sending messages, handling events, or dealing with namespaces, this guide has got you covered. Use it as a quick reference to streamline your real-time communication projects. Happy coding!