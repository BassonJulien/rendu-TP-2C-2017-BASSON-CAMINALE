const{Deadpool}  = require ('./deadpool');
var hour=0;
this.nightDayInterval = setInterval(() => hour+=1, 500);

class Poney {
  constructor() {
    this.restInterval = setInterval(() => this.seReposer(), 500);
    this.energy = 0;
    this.master = new Deadpool();
    this.isUnicorn = false;
    //Deadpool.pushPoney(this);
  }

  seReposer() {
    this.energy += 10;

    console.log(`ZZZZZZZzzzzzzzzzzzzzzz ${this.energy}`);
    if (this.energy === 100) {
      console.log('quoi?! mon Poney évolue');
      this.evolve();
    }
  }

  killPoney() {
    clearInterval(this.restInterval);
  }

  evolve() {
    this.master.helptransformation(this.energy)
      .then(() => this.isUnicorn = true)
      .catch(() => console.log('FU Senpai'))
    this.energy = 0
    setTimeout(() => {
      console.log(`${this.isUnicorn}`);

      this.getTransformed();
    },300)
  }

  getTransformed() {
    this.isUnicorn = false;
    console.log(`${this.isUnicorn}`);
  }
}


const monPoney = new Poney();

setTimeout(() => monPoney.killPoney(), 7000);
