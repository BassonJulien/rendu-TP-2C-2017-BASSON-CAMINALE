const {CycleTime}=require('./cycletime');
const time=new CycleTime();
class Poney {

  constructor() {
    this.restInterval = setInterval(() => this.seReposer(), 1000);
    this.energy = 0;
    this.isUnicorn = false;
  }

  seReposer() {

    // cas ou il fait nuit
    if(time.nuite===true) {
      if(this.isUnicorn===false) {
        this.energy += 20;
        console.log('ZZZZZZZzzzzzzzzzzzzzzz'.rainbow+`   le poney a : ${this.energy}`+' PV'.yellow); // rainbow
      }
      if (this.energy >= 90) {
        this.energy = 100;
      }
    }

    // cas ou il fait jour
    if(time.nuite===false) {
      if(this.isUnicorn===true) {
        this.energy += 10;
        console.log('ZZZZZZZzzzzzzzzzzzzzzz'.rainbow+`  la licorne a : ${this.energy}`+' PV'.yellow); // rainbow
      }
      if (this.energy >= 100) {
        this.energy = 0;
      }
    }
  }

  killPoney() {
    clearInterval(this.restInterval);

  }

}


module.exports = {Poney};