//// E-Commerce Order Pipeline (Amazon-like)

/// Kafka-style abstraction


class EventBus {
  constructor() {
    this.handlers = {};
  }

  subscribe(event, handler) {
    if (!this.handlers[event]) this.handlers[event] = [];
    this.handlers[event].push(handler);
  }

  publish(event, payload) {
    if (this.handlers[event]) {
      this.handlers[event].forEach(handler => handler(payload));
    }
  }
}

const bus = new EventBus();

// Consumers
bus.subscribe("OrderPlaced", (order) => {
  console.log("Payment processed for", order.id);
});

bus.subscribe("OrderPlaced", (order) => {
  console.log("Inventory reserved for", order.id);
});

bus.subscribe("OrderPlaced", (order) => {
  console.log("Shipping initiated for", order.id);
});

// Producer
function placeOrder(order) {
  console.log("Order placed:", order.id);
  bus.publish("OrderPlaced", order);
}

placeOrder({ id: "A1001" });


