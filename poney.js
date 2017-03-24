const {CycleTime}=require('./cycletime');
const time = new CycleTime();
class Poney {

  constructor(ev) {
    this.restInterval = setInterval(() => this.seReposer(), 1000);
    this.energyPoney = 0;
    this.isUnicorn = false;
    this.isAvailable = true;
    this.startListeners(ev);
    this.night=false;
  }

  startListeners(ev) {
    ev.on('Cycle change', period => {
      if (period === 'night') {

        this.night=true;
      }
      else
      {
        this.night=false;
      }

    });
  }

  seReposer() {

    if (this.isAvailable === true) {
      // cas ou il fait cycleEvents
      if (this.night === true) {
        if (this.isUnicorn === false) {
          this.energyPoney += 20;
          if (this.energyPoney >= 100) {
            this.energyPoney = 100;
          }
          console.log('ZZZZZZZzzzzzzzzzzzzzzz'.rainbow + `  le poney  a  : ${this.energyPoney}` + ' PV'.yellow); // rainbow

        }
        if (this.isUnicorn === true) {
          if (this.energyPoney >= 100) {
            this.energyPoney = 100;
          }
          console.log('ZZZZZZZzzzzzzzzzzzzzzz'.rainbow + `  la licorne a : ${this.energyPoney}` + ' PV'.yellow); // rainbow
        }
      }
      // cas ou il fait jour
      if (this.night === false) {
        if (this.isUnicorn === true) {
          if (this.energyPoney >= 100) {
            this.energyPoney = 100;
          }
          console.log('ZZZZZZZzzzzzzzzzzzzzzz'.rainbow + `  la licorne a : ${this.energyPoney}` + ' PV'.yellow); // rainbow
        }
        if (this.isUnicorn === false) {
          this.energyPoney += 10;
          if (this.energyPoney >= 100) {
            this.energyPoney = 100;
          }
          console.log('ZZZZZZZzzzzzzzzzzzzzzz'.rainbow + `  le poney   a : ${this.energyPoney}` + ' PV'.yellow); // rainbow
        }
      }
    }
    else {
      // si le poney ou la licorne n'est pas libre
      this.energyPoney=this.energyPoney;
    }

  }
}

module.exports = {Poney};