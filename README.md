# rendu-TP-2C-2017-BASSON-CAMINALE
<h1 align="center">
	<br>
	<br>
	<img width="360" src="http://assets1.ignimgs.com/2016/02/07/deadpooljpg-0d7bb9_1280w.jpg alt="chalk">
	<br>
	<br>
	<br>
</h1>


[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

## Contents
* [Installation](#installation)
* [Introduction](#introduction)
* [Index.js](#index)

## Installation:


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

## Introduction

We have 4 class : One for poney object whith some function who permit to manage poney life and it avaibility. The deapool class is unique and manage the tranformation of the poney and regener him.
 Also the spiderman class is unique and he just made some ride on the licornes through the function rodeo.
 The last one is cycletime, it permit to manage night and day with events. Life, transformation and regeneration depend of it.

## Index

We make an array of poney and we push an instance of poney in the array 'tabPoney'
```js
const {Poney}=require('./poney');
const nbPoney = 4;

const tabPoney = [];
for (let iVal = 0; iVal < nbPoney; iVal++) {
  tabPoney.push(new Poney(cycleEvents));
}
```

We have three setInteval in the index.js, this permit to call our functions with an time interval,
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

