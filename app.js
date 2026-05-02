let username = prompt("Enter username (max 50 chars):") || "Box";

if (username.length > 50) {
  username = username.substring(0, 50);
  alert("Username trimmed to 50 characters.");
}

const messages = document.getElementById("messages");
const input = document.getElementById("msgInput");
const button = document.getElementById("sendBtn");

function sendMessage() {
  let text = input.value.trim();
  if (!text) return;

  let msg = document.createElement("div");
  msg.className = "msg";
  msg.innerText = `${username}: ${text}`;

  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;

  input.value = "";
}

button.addEventListener("click", sendMessage);

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});