const {Deadpool} = require('./deadpool');
const {Poney}=require('./poney');
const {CycleTime}=require('./cycletime');
var colors = require('colors');

const nbPoney=4;
const dead = new Deadpool();
const cycle=new CycleTime();

TabPoney = [];
for (var iVal = 0; iVal < nbPoney; iVal++) {
  TabPoney.push(new Poney());
}



console.log('i like cake and pies'.underline.red) // outputs red underlined text






transformationInterval = setInterval(() => {
    var numero=Math.floor((Math.random() * nbPoney) + 0);
    dead.helptransformation(TabPoney[numero],numero)
      .then(() => {
        console.log('evolution du poney en licorne'.inverse.green+'\n \n');

      })
      .catch(() => {
        console.log('l evolution du poney à echoue'.inverse.red+'\n \n');

      });
  }, 700);

