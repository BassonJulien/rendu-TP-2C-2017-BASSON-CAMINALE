const {Poney}=require('./poney');
const {CycleTime}=require('./cycletime');
const time = new CycleTime();
const coeff = 5;
let instance = null;
const EventEmitter = require('events').EventEmitter;



class Deadpool {

  constructor(ev) {
    if (!instance) {
      instance = this;
      this.energyDeadpool = 80;
      this.maxEnergyDeadpool = 100;
      this.night = null;
      this.startListeners(ev);

      this.EnergieInterval = setInterval(() => this.EnergyDeadPool(), 500);
    }
    return instance;
  }

  startListeners(ev) {
    ev.on('Cycle change', period => {
      if (period === 'night') {

        this.night = true;
      }
      else {
        this.night = false;
      }

    });
  }

  helptransformation(tab, nbPoney) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (tab.energyPoney >= 50 && tab.isUnicorn === false && nbPoney < 14 && tab.isAvailable === true) {
          //on ne veut pas plus de 15 poney sinon la chance d'évolution est trop faible
          if (tab.energyPoney >= 50 && tab.energyPoney <= 70) {
            //gere les chances de succes de facon random + en prenant compte le nbr de poney
            let chance = (Math.floor((Math.random() * 15) + 1)) * (coeff / nbPoney);
            if (chance >= 10) {
              console.log('ohohoh TRANSFORMATION ?!'.inverse + '\n');
              tab.isUnicorn = true;

              resolve();
            }
          }
          if (tab.energyPoney >= 71 && tab.energyPoney < 100) {
            let chance1 = Math.floor((Math.random() * 15) + 7) * (coeff / nbPoney);
            if (chance1 >= 10) {
              console.log('ohohoh TRANSFORMATION ?!'.inverse + '\n');
              tab.isUnicorn = true;

              resolve();
            }
          }
          if (tab.energyPoney === 100) {
            let chance2 = Math.floor((Math.random() * 11) + 3)
            if (chance2 >= 10) {
              console.log('ohohoh TRANSFORMATION ?!'.inverse + '\n');
              tab.isUnicorn = true;
              resolve();
            }
            else{
              tab.energyPoney=0;
            }
          }
        }
        else {
          reject();

        }

      }, 1000);
    });
  }

  EnergyDeadPool() {
    if (this.energyDeadpool > 0) {
      if (this.night === true) {
        this.energyDeadpool -= 2;
        console.log('deadpool :'.underline.green + this.energyDeadpool + ' PV'.green + '\n');
      }
      else {

        this.energyDeadpool--;
        console.log('deadpool :'.underline.green + this.energyDeadpool + ' PV'.green + '\n');
      }
    }
  }

  regeneration(tab, numero) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (tab.isUnicorn === true) {//deadpool peut se regénérer qu'avec des licornes
          if (this.energyDeadpool <= 70) {
            this.regeneration(tab, numero); //à partir de 35 de vie deadpool peut se régénéré
            this.energyDeadpool = this.maxEnergyDeadpool;
            tab.energyPoney = 0;//on met l'énergie du poney à 0
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