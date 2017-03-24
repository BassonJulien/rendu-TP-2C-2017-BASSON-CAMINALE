class Poney {

  constructor(ev) {
    this.restInterval = setInterval(() => this.rest(), 1000);
    this.energyPoney = 0;
    this.isUnicorn = false;
    this.isAvailable = true;
    this.startListeners(ev);
    this.night = false;
  }

  startListeners(ev) {
    ev.on('Cycle change', period => {
      if (period === 'night') {
        this.night = true;
      } else {
        this.night = false;
      }
    });
  }

  rest() {
    if (this.isAvailable === true) {
      if (this.night === true) {
        if (this.isUnicorn === false) {
          this.energyPoney += 20;
          if (this.energyPoney >= 100) {
            this.energyPoney = 100;
          }
          console.log('ZZZZZZZzzzzzzzzzzzzzzz'.rainbow);
          console.log(`  le poney  a  : ${this.energyPoney}` + ' PV'.yellow);
        }
        if (this.isUnicorn === true) {
          if (this.energyPoney >= 100) {
            this.energyPoney = 100;
          }
          console.log('ZZZZZZZzzzzzzzzzzzzzzz'.rainbow);
          console.log(`  la licorne a : ${this.energyPoney}` + ' PV'.yellow);
        }
      }
      if (this.night === false) {
        if (this.isUnicorn === true) {
          if (this.energyPoney >= 100) {
            this.energyPoney = 100;
          }
          console.log('ZZZZZZZzzzzzzzzzzzzzzz'.rainbow);
          console.log(`  la licorne a : ${this.energyPoney}` + ' PV'.yellow);
        }
        if (this.isUnicorn === false) {
          this.energyPoney += 10;
          if (this.energyPoney >= 100) {
            this.energyPoney = 100;
          }
          console.log('ZZZZZZZzzzzzzzzzzzzzzz'.rainbow);
          console.log(`  le poney   a : ${this.energyPoney}` + ' PV'.yellow);
        }
      }
    }
  }
}
module.exports = {Poney};
