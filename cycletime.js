var events = require('events');
var EventEmitter = require('events').EventEmitter;

const nuit = new EventEmitter();
const jour = new EventEmitter();
const soiree = new EventEmitter();

class CycleTime {
  constructor() {


    this.heures = 0;

    this.nuite =null;

    this.heuresInterval = setInterval(() => this.heure(), 1000);


    nuit.on('nuit', function () {

    });

    jour.on('jour', function () {

    });

    soiree.on('soiree', function () {

    });



  }

  heure() {

    this.heures++;
    //console.log(this.heures);

    if (this.heures >= 0 && this.heures < 8) {
      // console.log("il fait nuit ");
      nuit.emit('nuit',this.nuite=true);

    }
    if (this.heures >= 8 && this.heures <= 19) {
      // console.log("il fait jour ici");
      jour.emit('jour',this.nuite=false);

    }

    if (this.heures > 19 && this.heures <= 24) {
      // console.log("il fait sombre");
      soiree.emit('soiree',this.nuite=false);
      if (this.heures === 24) {
        this.heures = 0;
      }
    }


  }


}



module.exports = {CycleTime};