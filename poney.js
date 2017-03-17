class Poney {
  constructor() {
    this.restInterval = setInterval(() => this.seReposer(),500);
    this.energy = 0;
    //this.master = new Deadpool();
    this.isUnicorn = false;
    //Deadpool.pushPoney(this);
  }

  seReposer() {
    this.energy += 10;

    console.log(`ZZZZZZZzzzzzzzzzzzzzzz ${this.energy}`);
    if (this.energy > 100) {
      console.log('quoi?! mon Poney évolue');
      this.evolve();
    }
  }

  killPoney() {
    clearInterval(this.restInterval);
  }

  evolve() {
    console.log('votre poney est maintenant un licorne')
    /*Deadpool.evolveMeSenpaiiii()
     .then(() => this.isUnicorn = true)
     .catch(() => console.log('FU Senpai'))
     .finally(() => this.energy = 0);*/
    this.isUnicorn = true;
    console.log(`${this.isUnicorn}`);

    this.energy = 0;
    this.getTransformed();
  }
  getTransformed()
  {
    this.isUnicorn=false;
    console.log(`${this.isUnicorn}`);
  }
}


const monPoney = new Poney();

setTimeout(() => monPoney.killPoney(), 7000);
