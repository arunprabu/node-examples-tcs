const events = require('events'); // Import events module

const eventEmitter = new events.EventEmitter(); // Create an eventEmitter object

// registering an event - adding eventlistener 
// custom event
eventEmitter.on("first_event", () => {
  console.log("Called first_event");
});

eventEmitter.emit("first_event");