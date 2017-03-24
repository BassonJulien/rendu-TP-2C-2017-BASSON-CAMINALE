# rendu-TP-2C-2017-BASSON-CAMINALE
<h1 align="center">
	<br>
	<br>
	<img width="360" src="http://assets1.ignimgs.com/2016/02/07/deadpooljpg-0d7bb9_1280w.jpg alt="chalk">
	<br>
	<br>
	<br>
</h1>

To install the project, please follow the instructions :
--------------------------------------------------------

```
git clone git@github.com:chazzfit/rendu-TP-2C-2017-BASSON-CAMINALE.git
```

then :
-------

```
cd paths/rendu-TP-2C-2017-BASSON-CAMINALE
npm i
npm start
```
Introduction :
---------------


Index.js :
--------------------------------------------------------
We make an array of poney and we push an instance of poney in the array 'tabPoney'
```js
const {Poney}=require('./poney');
const nbPoney = 4;

const tabPoney = [];
for (let iVal = 0; iVal < nbPoney; iVal++) {
  tabPoney.push(new Poney(cycleEvents));
}
```

We have three setInteval, this permit to call our functions with an time interval,
in this case each  1001ms we call helptransformation from dead. In this function 
we return a promise where if it resolve() we take the return promise by .then()
and  if it reject() we catch it by .catch()
```js
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
```