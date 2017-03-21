const {CycleTime}=require('./cycletime');
const time = new CycleTime();
class Poney {

  constructor() {
    this.restInterval = setInterval(() => this.seReposer(), 1000);
    this.energy = 0;
    this.isUnicorn = false;
    this.isAvailable = true;
  }

  seReposer() {

    if (this.isAvailable === true) {
      // cas ou il fait nuit
      if (time.nuite === true) {
        if (this.isUnicorn === false) {
          this.energy += 20;
          if (this.energy >= 100) {
            this.energy = 100;
          }
          console.log('ZZZZZZZzzzzzzzzzzzzzzz'.rainbow + `   le poney a : ${this.energy}` + ' PV'.yellow); // rainbow

        }
        if (this.isUnicorn === true) {
          if (this.energy >= 100) {
            this.energy = 100;
          }
          console.log('ZZZZZZZzzzzzzzzzzzzzzz'.rainbow + `   la licorne a : ${this.energy}` + ' PV'.yellow); // rainbow

        }

      }


      // cas ou il fait jour
      if (time.nuite === false) {
        if (this.isUnicorn === true) {
          if (this.energy >= 100) {
            this.energy = 0;
          }
          console.log('ZZZZZZZzzzzzzzzzzzzzzz'.rainbow + `  la licorne a : ${this.energy}` + ' PV'.yellow); // rainbow

        }
        if (this.isUnicorn === false) {
          this.energy += 10;
          if (this.energy >= 100) {
            this.energy = 0;
          }
          console.log('ZZZZZZZzzzzzzzzzzzzzzz'.rainbow + `  le poney a : ${this.energy}` + ' PV'.yellow); // rainbow

        }

      }
    }


  }
}

module.exports = {Poney};