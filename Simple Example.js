// Simple JS Example of Event Driven Architecture

// Using Node.js EventEmitter:

const EventEmitter = require("events");

class Bus extends EventEmitter {}
const bus = new Bus();

// Consumers
bus.on("OrderCreated", (order) => {
  console.log("Processing payment for", order.id);
});

bus.on("OrderCreated", (order) => {
  console.log("Reserving inventory for", order.id);
});

bus.on("OrderCreated", (order) => {
  console.log("Sending email for", order.id);
});

// Producer
function createOrder(order) {
  console.log("Order created:", order.id);
  bus.emit("OrderCreated", order);
}

createOrder({ id: "ORD101" });

