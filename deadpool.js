
const coeff = 5;

class Deadpool {
  constructor(ev) {
    this.energyDeadpool = 80;
    this.maxEnergyDeadpool = 100;
    this.night = null;
    this.startListeners(ev);
    this.energieInterval = setInterval(() => this.energyDeadPool(), 500);
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

  helptransformation(tab, nbPoney) {
    const coefPoney = (coeff / nbPoney);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (tab.energyPoney >= 50 && tab.isUnicorn === false) {
          if (nbPoney < 14 && tab.isAvailable === true) {
            if (tab.energyPoney >= 50 && tab.energyPoney <= 70) {
              const chance = (Math.floor((Math.random() * 15) + 1)) * coefPoney;
              if (chance >= 10) {
                console.log('ohohoh TRANSFORMATION ?!'.inverse + '\n');
                tab.isUnicorn = true;
                resolve();
              }
            }
            if (tab.energyPoney >= 71 && tab.energyPoney < 100) {
              const chance1 = Math.floor((Math.random() * 15) + 7) * coefPoney;
              if (chance1 >= 10) {
                console.log('ohohoh TRANSFORMATION ?!'.inverse + '\n');
                tab.isUnicorn = true;
                resolve();
              }
            }
            if (tab.energyPoney === 100) {
              const chance2 = 10;
              if (chance2 >= 10) {
                console.log('ohohoh TRANSFORMATION ?!'.inverse + '\n');
                tab.isUnicorn = true;
                resolve();
              }
            }
          }
        } else {
          reject();
        }
      }, 1000);
    });
  }

  energyDeadPool() {
    if (this.energyDeadpool > 0) {
      if (this.night === true) {
        this.energyDeadpool -= 2;
        console.log('deadpool :'.underline.green);
        console.log(this.energyDeadpool + ' PV'.green + '\n');
      } else {
        this.energyDeadpool--;
        console.log('deadpool :'.underline.green);
        console.log(this.energyDeadpool + ' PV'.green + '\n');
      }
    }
  }

  regeneration(tab, numero) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (tab.isUnicorn === true) {
          if (this.energyDeadpool <= 70) {
            this.regeneration(tab, numero);
            this.energyDeadpool = this.maxEnergyDeadpool;
            tab.energyPoney = 0;
            tab.isUnicorn = false;
            console.log('deadpool c est regenere'.green + '\n \n');
            console.log('la licorne : '.green + numero);
            console.log(' redevient poney'.green + '\n \n');
            resolve();
          } else {
            reject();
          }
        }
      }, 50);
    });
  }
}
module.exports = {Deadpool};
