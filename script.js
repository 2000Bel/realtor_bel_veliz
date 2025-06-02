function toggleChat() {
    const chatbox = document.getElementById("chatbot-box");
    chatbox.style.display = chatbox.style.display === "flex" ? "none" : "flex";
  }
  
  function handleKey(e) {
    if (e.key === "Enter") {
      const input = document.getElementById("chat-input");
      const message = input.value.trim();
      if (message) {
        addMessage(message);
        input.value = "";
        setTimeout(() => botReply(message), 600);
      }
    }
  }
  
  function addMessage(msg) {
    const container = document.getElementById("chatbot-messages");
    const div = document.createElement("div");
    div.classList.add("bot");
    div.textContent = "Tú: " + msg;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }
  
  function botReply(userMsg) {
    const container = document.getElementById("chatbot-messages");
    const reply = document.createElement("div");
    reply.classList.add("bot");
  
    if (userMsg.toLowerCase().includes("cita")) {
      reply.textContent = "Puedes agendar una cita aquí: calendly.com/realtorbelveliz 📅";
    } else if (userMsg.toLowerCase().includes("comprar")) {
      reply.textContent = "¡Genial! ¿Qué tipo de propiedad estás buscando y en qué ciudad?";
    } else if (userMsg.toLowerCase().includes("vender")) {
      reply.textContent = "Puedo ayudarte a vender tu casa rápido. ¿Cuál es la dirección?";
    } else {
      reply.textContent = "Gracias por tu mensaje. Te responderé pronto o agenda una cita directamente.";
    }
  
    container.appendChild(reply);
    container.scrollTop = container.scrollHeight;
  }
  
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Gracias por tu mensaje. Me comunicaré contigo pronto.");
    this.reset();
  });