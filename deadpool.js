const {Poney}=require('./poney');
class Deadpool {

  constructor() {

    const poney = new Poney();
    this.energie = 80;
    this.maxEnergieDeadpool = 100;
    this.EnergieInterval = setInterval(() => this.EnergieDeadPool(), 700);


  }

  helptransformation(tab, numero) {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        if (tab.energy >= 50 && tab.isUnicorn === false) {

          if (tab.energy >= 50 && tab.energy <= 70) {
            let chance = Math.floor((Math.random() * 10) + 1);
            if (chance >= 10) {
              console.log('ohohoh TRANSFORMATION ?!'.inverse + '\n');
              tab.isUnicorn = true;

              resolve();
            }
          }
          if (tab.energy >= 71 && tab.energy < 100) {
            let chance1 = Math.floor((Math.random() * 10) + 7);
            if (chance1 >= 10) {
              console.log('ohohoh TRANSFORMATION ?!'.inverse + '\n');
              tab.isUnicorn = true;

              resolve();
            }
          }
          if (tab.energy === 100) {
            let chance2 = 10;
            if (chance2 >= 10) {
              console.log('ohohoh TRANSFORMATION ?!'.inverse + '\n');
              tab.isUnicorn = true;
              resolve();
            }
          }
        }
        else {
          reject();
        }

      }, 1000);
    });
  }

  EnergieDeadPool() {
    if (this.energie > 0) {
      this.energie--;
      console.log('deadpool :'.underline.green + this.energie + ' PV'.green + '\n')
    }
  }

  regeneration(tab, numero) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (tab.isUnicorn === true) {//deadpool peut se regénérer qu'avec des licornes
          if (this.energie <= 70) {
            this.regeneration(tab, numero); //à partir de 35 de vie deadpool peut se régénéré
            this.energie = this.maxEnergieDeadpool;
            tab.energy = 0;//on met l'énergie du poney à 0
            tab.isUnicorn = false;//la licorne redevient poney
            console.log('deadpool c est regenere'.green + '\n \n');
            console.log('la licorne : '.green + numero + ' redevient poney'.green + '\n \n');
            resolve();
          }
          else reject();
        }
      }, 50);

    });
  }
}
  module.exports = {Deadpool};