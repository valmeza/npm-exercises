"use strict";
const $ = require('jquery');

const hello = 'Hello';
const sayHello = () => hello;

sayHello();

$(document).ready(() => {
   $('body').html(sayHello());
});

const saySomething = require('./say-hello');
console.log(saySomething);