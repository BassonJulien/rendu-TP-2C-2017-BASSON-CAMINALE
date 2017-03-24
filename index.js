const {Deadpool} = require('./deadpool');
const {Poney}=require('./poney');
const {Spiderman}=require('./spiderman')
const {CycleTime, cycleEvents}=require('./cycletime');
var colors = require('colors');

const nbPoney = 4;
const dead = new Deadpool(cycleEvents);
const cycle = new CycleTime();
const spidey = new Spiderman();

const tabPoney = [];
for (let iVal = 0; iVal < nbPoney; iVal++) {
  tabPoney.push(new Poney(cycleEvents));
}

const superiorPow = number => {
  number = String(number) +'xx';
  let pow = '1';
  while  (pow.length < number.length) {
    pow += '0';
  }
  return Number(pow);
};

spideyInterval = setInterval(() => {
  const numero = Math.floor((Math.random() * superiorPow(tabPoney.length)) % tabPoney.length);
  spidey.rodeo(tabPoney[numero], numero)
    .then(() => {
      tabPoney[numero].isAvailable = true;
    })
    .catch(() => {
    });
}, 5000);

transformationInterval = setInterval(() => {
  const numero = Math.floor((Math.random() * superiorPow(tabPoney.length)) % tabPoney.length);
  dead.helptransformation(tabPoney[numero], nbPoney)
    .then(() => {
      console.log('evolution du poney en licorne'.inverse.green + '\n \n');
    })
    .catch(() => {
      console.log('l evolution du poney à echoue'.inverse.red + '\n \n');
    });
}, 1001);

regenerationInterval = setInterval(() => {
  const numero1 = Math.floor((Math.random() * superiorPow(tabPoney.length)) % tabPoney.length);
  dead.regeneration(tabPoney[numero1], numero1)
    .then(() => {
      console.log('\n'.green);
    })
    .catch(() => {
      console.log('\n');
    });
}, 900);