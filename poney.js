const {CycleTime}=require('./cycletime');
const time=new CycleTime();
class Poney {

  constructor() {
    this.restInterval = setInterval(() => this.seReposer(), 1000);
    this.energy = 0;
    this.isUnicorn = false;
  }

  seReposer() {
    if(time.nuite===true) {
      if(this.isUnicorn===true) {
        this.energy += 20;
        console.log(`ZZZZZZZzzzzzzzzzzzzzzz ${this.energy}`.rainbow); // rainbow
      }
      if (this.energy >= 100) {
        this.energy = 0;
      }
    }
    if(time.nuite===false) {
      this.energy += 10;
      console.log(`ZZZZZZZzzzzzzzzzzzzzzz ${this.energy}`.rainbow); // rainbow
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