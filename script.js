// Obtener elementos del DOM
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const counterElement = document.getElementById("counter");
const messagesElement = document.getElementById("messages");

let counter = 0;

// Función para actualizar el contador y mostrar el mensaje
function updateCounterAndMessage(message, color) {
  counter += message;
  counterElement.textContent = counter;

  const messageElement = document.createElement("div");
  messageElement.textContent = `Sumó ${Math.abs(message)} números`;
  messageElement.classList.add("message", color);
  messagesElement.appendChild(messageElement);
}

// Funciones de los botones
button1.addEventListener("click", function() {
  updateCounterAndMessage(1, "green");
});

button2.addEventListener("click", function() {
  updateCounterAndMessage(5, "green");
});

button3.addEventListener("click", function() {
  updateCounterAndMessage(-1, "red");
});

button4.addEventListener("click", function() {
  updateCounterAndMessage(-5, "red");
});

button5.addEventListener("click", function() {
  counter = 0;
  counterElement.textContent = counter;
  messagesElement.innerHTML = "";
});
