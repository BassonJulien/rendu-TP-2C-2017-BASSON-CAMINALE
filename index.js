const {Deadpool} = require('./deadpool');
const {Poney}=require('./poney');
const {Spiderman}=require('./spiderman')
const {CycleTime, cycleEvents}=require('./cycletime');
var colors = require('colors');

const nbPoney = 4;
const dead = new Deadpool(cycleEvents);
const cycle = new CycleTime();
const spidey = new Spiderman();

tabPoney = [];
for (var iVal = 0; iVal < nbPoney; iVal++) {
  tabPoney.push(new Poney(cycleEvents));
}

spideyInterval = setInterval(() => {
  var numero = Math.floor((Math.random() * nbPoney) + 0);
  spidey.rodeo(tabPoney[numero], numero)
    .then(() => {
      tabPoney[numero].isAvailable = true;
    })
    .catch(() => {

    });
}, 5000);

transformationInterval = setInterval(() => {
  var numero = Math.floor((Math.random() * nbPoney));
  dead.helptransformation(tabPoney[numero], nbPoney)
    .then(() => {
      console.log('evolution du poney en licorne'.inverse.green + '\n \n');

    })
    .catch(() => {
      console.log('l evolution du poney à echoue'.inverse.red + '\n \n');

    });
}, 1001);

regenerationInterval = setInterval(() => {
  var numero1 = Math.floor((Math.random() * nbPoney));
  dead.regeneration(tabPoney[numero1], numero1)
    .then(() => {
      console.log('\n'.green);

    })
    .catch(() => {
      console.log('\n');

    });
}, 900);