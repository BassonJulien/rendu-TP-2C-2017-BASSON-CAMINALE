/**
 * Created by julien on 19/03/17.
 */
const{poney} = require('./poney');

class Deadpool {

  constructor() {


    this.energie = 100;
    this.maxEnergieDeadpool = 100;
    this.EnergieInterval = setInterval(() => this.EnergieDeadPool(), 500);

    //const marche= new rungis();
  }

  helptransformation(enerpo) {

    return new Promise((resolve, reject) => {

      setTimeout(() => {
        console.log('transformation du poney en licorne');

        if (enerpo === 100) {
          this.regeneration();
          resolve();
        }
        else {
          reject();
        }

      }, 200);
    });
  }

  EnergieDeadPool() {
    this.energie--;
    console.log(this.energie)
  }

  KillDeadPool() {
    clearInterval(this.EnergieInterval)
  }
  pushPoney(poney ) {
  }


  regeneration() {
    this.energie = this.maxEnergieDeadpool;
    console.log('deadpool c est regenere');
  }
}


module.exports = {Deadpool};