/**
 * Created by byoelin on 8/22/2016.
 */
var path = ['modules'];
var elegance = require('./elegance.js');
var express = require('express');

//call the elegence module. this should make a 'require' var
elegance.initialize(express, ['modules', 'objects'], ['routes']);
helloWorld.speak(4);

eval("var newTest = 'Hi';");
console.log(newTest);