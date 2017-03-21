const {Deadpool} = require('./deadpool');
const {Poney}=require('./poney');
const {Spiderman}=require('./spiderman')
const {CycleTime}=require('./cycletime');
var colors = require('colors');

const nbPoney = 4;
const dead = new Deadpool();
const cycle = new CycleTime();
const spidey = new Spiderman();

  TabPoney = [];
for (var iVal = 0; iVal < nbPoney; iVal++) {
  TabPoney.push(new Poney());
}


spideyInterval = setInterval(() => {
  var numero = Math.floor((Math.random() * nbPoney) + 0);
  dead.helptransformation(TabPoney[numero])
    .then(() => {
      console.log('spidey ride la licorne'.inverse.green + '\n \n');
      TabPoney[numero].isAvailable=true;

    })
    .catch(() => {
      console.log('spidey n as pas envie de s amuser'.inverse.red + '\n \n');

    });
}, 700);


transformationInterval = setInterval(() => {
  var numero = Math.floor((Math.random() * nbPoney) + 0);
  dead.helptransformation(TabPoney[numero], numero)
    .then(() => {
      console.log('evolution du poney en licorne'.inverse.green + '\n \n');

    })
    .catch(() => {
      console.log('l evolution du poney à echoue'.inverse.red + '\n \n');

    });
}, 700);

regenerationInterval = setInterval(() => {
  var numero1=Math.floor((Math.random() * nbPoney) + 0);
  dead.regeneration(TabPoney[numero1],numero1)
    .then(() => {
      console.log('\n'.green);

    })
    .catch(() => {
      console.log('\n');

    });
}, 700);