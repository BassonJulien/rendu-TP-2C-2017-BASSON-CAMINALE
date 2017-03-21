const {Poney}=require('./poney');


class Spiderman {

  constructor() {
    this.poney = 1;
    this.energie = 10;
    // this.energieponey = 10;
    // this.maxEnergieDeadpool = 10;


  }

  rodeo(tab) {
    return new Promise((resolve, reject) => {


      let rdRodeo = Math.floor((Math.random() * 3000) + 1000);
      if (rdRodeo > 2000) {
        setTimeout(() => {
          tab.isAvailable = false;


        }, 1000);
      }


    });
  }
}

module.exports = {Spiderman};