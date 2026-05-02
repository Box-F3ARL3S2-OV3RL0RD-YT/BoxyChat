const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 3000 });

console.log("BoxyChat server running on port 3000");

wss.on("connection", (ws) => {
  console.log("User connected");

  ws.on("message", (data) => {
    // broadcast to everyone
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data.toString());
      }
    });
  });

  ws.on("close", () => {
    console.log("User disconnected");
  });
});