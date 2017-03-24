/* eslint-disable no-restricted-modules, import/no-unassigned-import
 */
require('colors');
/* eslint-enable no-restricted-modules, import/no-unassigned-import
 */
/* eslint-disable no-use-extend-native/no-use-extend-native */
const {Deadpool} = require('./deadpool');
const {Poney} = require('./poney');
const {Spiderman} = require('./spiderman');
const {cycleEvents} = require('./cycletime');

const nbPoney = 4;
const dead = new Deadpool(cycleEvents);
const spidey = new Spiderman();

const tabPoney = [];
for (let iVal = 0; iVal < nbPoney; iVal++) {
  tabPoney.push(new Poney(cycleEvents));
}

const superiorPow = number => {
  number = String(number) + 'xx';
  let pow = '1';
  while (pow.length < number.length) {
    pow += '0';
  }
  return Number(pow);
};

const spideyInterval = setInterval(() => {
  const numPow = superiorPow(tabPoney.length);
  const numbR = (Math.random() * numPow) % tabPoney.length;
  const numero = Math.floor(numbR);
  spidey.rodeo(tabPoney[numero], numero)
    .then(() => {
      tabPoney[numero].isAvailable = true;
    })
    .catch(() => {
    });
}, 5000);

const transformationInterval = setInterval(() => {
  const numPow = superiorPow(tabPoney.length);
  const numbR = (Math.random() * numPow) % tabPoney.length;
  const numero = Math.floor(numbR);
  dead.helptransformation(tabPoney[numero], nbPoney)
    .then(() => {
      console.log('evolution du poney en licorne'.inverse.green + '\n \n');
    })
    .catch(() => {
      console.log('l evolution du poney à echoue'.inverse.red + '\n \n');
    });
}, 1001);

const regenerationInterval = setInterval(() => {
  const numPow = superiorPow(tabPoney.length);
  const numbR = (Math.random() * numPow) % tabPoney.length;
  const numero1 = Math.floor(numbR);
  dead.regeneration(tabPoney[numero1], numero1)
    .then(() => {
      console.log('\n'.green);
    })
    .catch(() => {
      console.log('\n');
    });
}, 900);

setTimeout(() => {
  clearInterval(spideyInterval);
  clearInterval(transformationInterval);
  clearInterval(regenerationInterval);
}, 30000);
