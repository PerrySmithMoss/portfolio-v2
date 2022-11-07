---
id: "6"
title: "Creating a simple chat-app with Node.js, Socket.io and React.js"
datePublished: "19th May, 2022"
slug: "setting-up-socketio-with-nodejs"
image: "/assets/images/blog/setup-socketio-with-nodejs.jpg"
description: "Learn how to setup Socket.io with Node.js."
featuredPost: true
tech: ["Socket.io"]
tags: ["Socket.io"]
---

## Introduction

Real-time features such as messaging, notifications, gaming, polling etc is almost a necessity in most modern applications today. These features are enabled by a computer communications protocol called a WebSocket. This protocol provides full-duplex communication channels over a single TCP connection. Simply put, this protocol allows all devices on a WebSocket connection to communicate at the same time. Unlike the traditional HTTP protcol which communicates over a half-duplex communication, allowing only a request response to take place at one time. We will learn how to setup a simple Node.js server, which will allow clients to send and receive messages.

---

## Prerequisites

- A version of Node.js installed on your machine
- A version of npm or yarn installed on your machine

---

## Setup

In order to get up and running we will need two enviroments, 1. server - this will be our WebSocket server which will handle the connections and communication of user(s), 2. client - this will be the the user(s) who connect to the server. First we will create a folder called chat-app, this will house both the client and the server. In your terminal navigate to the directory you wish to create the chat app inside and type the following commands:

```bash
mkdir chat-app

cd chat-app

mkdir client

mkdir server
```

---

### Server

We will first install two packages in our server enviroment, 1. nodemon - this is a development dependancy which will automatically restart our node application when file changes in are detected. This will save us having to restart our server every time we make a change, 2. socket.io - this package will serve as our WebSocket server and enable us to send/receive communication from the client.

#### Installing dependencies

```bash
cd server

touch server.js

// npm
npm init -y

npm install nodemon --save-dev
npm install socket.io --save

// yarn
yarn init -y

yarn add -D nodemon

yarn add socket.io
```

#### Configuring server 

Now that the relavant packages have been installed we can finally get to some code. Open the server.js file we created in any editor of your choice (I personally like [Visual Studio Code](https://code.visualstudio.com/)) and add the following code:

```javascript
// server/server.js
const http = require("http");
const { Server } = require("socket.io");

// http server
const server = http.createServer();

// WebSocket server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const main = async () => {
  // Listen for when the client connects via socket.io-client
  io.on("connection", (socket) => {
    socket.on("disconnect", () => {
      socket.disconnect();
    });

    socket.on("join-room", async (roomId) => {
      socket.join(roomId);
    });

    socket.on("send-message", async (room, message) => {
      io.to(room).emit("receive-message", newMessage);
    });
  });

  server.listen(5001, () =>
    console.log(`🚀  Server is running on http://localhost:5001`)
  );
};

main().catch((err) => {
  console.log(err);
});
```

In the code above we have initialsed a http server on port 5001 and a WebSocket server which is setup to allow for CORS from http://localhost:3000 with GET and POST methods. From there the server then listens on a connection event for incoming sockets. Each socket then contains a few methods which it listens for, the first of which in our application is `socket.on("disconnect"`. This disconnect method fires when a client has disconnected from our WebSocket connection, causing the server to close the connection with the client. The next method in our app is `socket.on("join-room"`, this listens for clients who wish to join a room. As you can see this method passes a callback function with the roomId a user wishes to join as a parameter. Inside the callback function we then call `.join` to subscribe the user's socket to the channel (room) they which to join. Underneath the previous method we call `socket.on("send-message"`, this method listens for any messages that are sent by the client. This method also contains a callback function with the roomId and message as parameters. Inside this method we use `io.to(roomId)` to target the room which the user wishes to send a message to and use .`.emit("receive-message", message)` to broadcast the message to all connected clients in the room. You can see all the different socket methods [here](https://socket.io/docs/v3/server-api/).

#### Launching server

In order to run our server, open up the package.json file and add a script that will allow us to use nodemon in development:

```json
  "scripts": {
    "dev": "nodemon server.js"
  },
```

Now, let's boot up our server by running the following command:

```bash
// npm
npm run dev

// yarn
yarn dev
```

If your server is configured correctly and you see something like the following output in your terminal, this means the your server is up and running!

```bash
$ nodemon server.js
[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
🚀  Server running on http://localhost:5001
```

---

### Client

Now that we have our server setup and WebSocket ready to accept communication, we can complete the final piece of the puzzle. To start, navigate to the client directory we created in the fist part of our setup. If you're following from the steps above then simply use the following commands in your terminal:

```bash
cd ..

cd client
```

#### Installing dependencies

Once in the client directory we will first need to initialise our React.js application, this can be done with the following command:

```bash
// npm 
npx create-react-app .

// yarn 
yarn create react-app .
```

Once your React app has finished installing, we will add the socket.io-client to our client enviroment, this is what will allow us to establish a connection to the WebSocket server and exchange messages to other clients. 

```bash
// npm 
npm install socket.io-client --save


// yarn 
yarn add socket.io-client
```

#### Configuring client

Now that we have initialised our React app and installed the socket.io-client we can start to flesh out the front-end application. Open the App.js file inside the src directory in your editor of choice and change it's contents to the following code:

```jsx
// client/src/App.js
import "./App.css";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

// Connection to WebSocket server
const socket = io.connect("http://localhost:5001");

function App() {
  //Room State
  const [room, setRoom] = useState("");

  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join-room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send-message", room, message);
  };

  useEffect(() => {
    socket.on("receive-message", (message) => {
      setMessageReceived(message);
    });
  }, [socket]);

  return (
    <div className="App">
      <input
        placeholder="Room Number..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button onClick={joinRoom}> Join Room</button>
      <input
        placeholder="Message..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button onClick={sendMessage}> Send Message</button>
      <h1> Message:</h1>
      {messageReceived}
    </div>
  );
}

export default App;
```

In the code above we first connect to our WebSocket server using the `io.connect` method and pass in our WebSocket server URL as the argument. Now inside the App function we initalise a few states, one to keep track of the room the user wants to chat in, one to hold the user's message and one to keep track of the latest message sent. Underneath our state variales you will find two functions, 1. `joinRoom` - this will emmit an event to join the room specified by the user, 2. `sendMessage` - this will emmit an event to send a message to the room in which the user specified. Below our two functions we have a `useEffect` which will be responsible for listening out for `"receive-message"` events, when this event is emmited on the server the client will pick it up and set our `messageReceived` state with the messsage sent from the server. You will notice that our useEffect has our socket we connected to as a dependancy, this tells React to only trigger what's inside the useEffect if our socket changes. Lastely, in our JSX we have an input for the room the user would like to join, an input for the message the user wouldd like to send, a button to send the message and our `messageReceived` state to display the latest message. As you can see, this is a very barebones chat app, no custom styling or fancy custom hooks, this is purly to demonstrate a proof of concept.

#### Launching client

In order to run your application, simply use the following command inside the client enviroment in your terminal:

```bash
// npm 
npm run start

// yarn 
yarn start
```

You will know if your client has launced successfully because you will get something like the following in your terminal output:

```bash
Compiled successfully!

You can now view client in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.36.52:3000

Note that the development build is not optimized.
To create a production build, use yarn build.

webpack compiled successfully
```

## Testing the app

If you've made it this far, well done! We're now at the last hurdle where we will test our chat application. With both the client and server running navigate to where your client is running ([http://localhost:3000](http://localhost:3000)), you should be greeted by the most simple chat interface you will ever see. Now, open another tab and navigate to the same URL. To test if both clients can communicate with each other, simply join the same room on both tabs. For example, enter the number 13 and join the room in both tabs, now type a message and use the send message button to send the message. You should see your message displayed in both tabs underneath the `Message:` heading. Voilà! You now have your very own chat app. 

## Brownie points

If you would like to take your application to the next level and expand your knowledge, I would recommend adding any of the following features to your application:

- User authorisation with login screen
- Show all messages in the chat, not just the most recent messaage
- Add custom styling
- Add a sidebar which displays all the users connected to the application
- Add the ability for users to send emojis/images/videos/voice messages
- Push notifications
- Save messages to a database
- Add encription to the messages
- Message persistence for offfline use