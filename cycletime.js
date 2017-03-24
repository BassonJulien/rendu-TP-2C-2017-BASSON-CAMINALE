const EventEmitter = require('events').EventEmitter;

const cycleEvents = new EventEmitter();

class CycleTime {

  constructor() {
    this.hours = 0;

    this.nuite = null;

    this.hourInterval = setInterval(() => this.heure(), 1000);
  }

  heure() {

    this.hours++;
    //console.log(this.hours);

    if (this.hour === 7) {
      // console.log("il fait cycleEvents ");
      cycleEvents.emit('Cycle change', 'day');

    } else if (this.hours === 20) {
      cycleEvents.emit('Cycle change', 'night');

    }
  }

  stopClock () {
    clearInterval(this.hourInterval)
  }
}


module.exports = {CycleTime, cycleEvents};