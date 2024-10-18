// server.js
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8000 });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    console.log("Received:", message);
    // Echo the message back to the client
    ws.send(message);
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server is running on ws://localhost:8000/ws");
