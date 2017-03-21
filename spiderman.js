class Spiderman {

    constructor() {
        this.poney = 1;
        this.energie = 10;
        // this.energieponey = 10;
        // this.maxEnergieDeadpool = 10;



    }

    rodeo() {

      setTimeout(() =>
        //poney.qcch
        , Math.floor((Math.random() * 3000) + 1000));
        //renvoie une valeur en 1000 et 3000

    }
}
const spider=new Spiderman();
spider.rodeo();

module.exports={Spiderman};