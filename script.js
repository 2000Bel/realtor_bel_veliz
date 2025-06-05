function toggleChat() {
  const box = document.getElementById("chatbox");
  box.style.display = box.style.display === "flex" ? "none" : "flex";
}

function handleKey(e) {
  if (e.key === "Enter") {
    const input = document.getElementById("chat-input");
    const userMessage = input.value.trim();
    if (userMessage) {
      addMessage("You: " + userMessage);
      input.value = "";
      setTimeout(() => botReply(userMessage), 500);
    }
  }
}

function addMessage(msg) {
  const messages = document.getElementById("chat-messages");
  const div = document.createElement("div");
  div.classList.add("bot");
  div.textContent = msg;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function botReply(userMsg) {
  const response = document.createElement("div");
  response.classList.add("bot");
  let lower = userMsg.toLowerCase();

  if (lower.includes("buy")) {
    response.textContent = "Great! What type of property and location are you looking for?";
  } else if (lower.includes("rent")) {
    response.textContent = "Nice! Are you looking for an apartment, condo, or house to rent?";
  } else if (lower.includes("sell")) {
    response.textContent = "Awesome! What’s the address or city of the property you want to sell?";
  } else {
    response.textContent = "I can help you buy, rent, or sell. Just let me know what you need!";
  }

  document.getElementById("chat-messages").appendChild(response);
}