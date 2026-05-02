const WebSocket = require("ws");

const PORT = process.env.PORT || 3000;

const wss = new WebSocket.Server({ port: PORT });

console.log("BoxyChat server running on port", PORT);

wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data.toString());
      }
    });
  });
});