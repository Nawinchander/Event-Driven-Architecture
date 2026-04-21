/// Ride Booking Workflow (Uber-like)


/// Ride Service → Kafka → Driver/ETA/Pricing services

const bus = new EventBus();

bus.subscribe("RideRequested", (ride) => {
  console.log("Finding driver for", ride.userId);
});

bus.subscribe("RideRequested", (ride) => {
  console.log("Calculating ETA for", ride.userId);
});

bus.subscribe("RideRequested", (ride) => {
  console.log("Calculating surge price for", ride.userId);
});

function requestRide(ride) {
  console.log("Ride requested");
  bus.publish("RideRequested", ride);
}

requestRide({ userId: "USER1" });

