let username = prompt("Enter username (max 50 chars):") || "Box";

if (username.length > 50) {
  username = username.substring(0, 50);
  alert("Username trimmed to 50 characters.");
}

// CONNECT TO SERVER
const socket = new WebSocket("ws://localhost:3000");

const messages = document.getElementById("messages");
const input = document.getElementById("msgInput");
const button = document.getElementById("sendBtn");

// RECEIVE MESSAGE
socket.onmessage = (event) => {
  const msg = document.createElement("div");
  msg.className = "msg";
  msg.innerText = event.data;
  messages.appendChild(msg);
};

// SEND MESSAGE
function sendMessage() {
  let text = input.value.trim();
  if (!text) return;

  socket.send(`${username}: ${text}`);
  input.value = "";
}

button.addEventListener("click", sendMessage);

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});