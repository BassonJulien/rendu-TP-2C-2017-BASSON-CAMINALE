const {Poney}=require('./poney');


class Spiderman {

  constructor() {
    this.energie = 10;
  }

  rodeo(tab,num) {
    return new Promise((resolve, reject) => {
      let rdRodeo = Math.floor((Math.random() * 3) + 1);
      if (rdRodeo > 2) {
        setTimeout(() => {
          tab.isAvailable = false;
          console.log('spidey ride la licorne :  '.red.bgWhite.bold+num+ '\n \n');
          console.log('__/~|____');
          console.log('[4x4-----]  ~~~~~');
          console.log('(_) (_)  \n \n');
          resolve();
        }, 3000);
      }
      else {
        reject();
      }
    });
  }
}

module.exports = {Spiderman};