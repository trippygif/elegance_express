/**
 * Created by byoelin on 8/22/2016.
 */
var path = ['modules'];
var elegance = require('./elegance.js');
var express = require('express');

//call the elegence module. this should make a 'require' var
elegance.initialize(express, ['modules', 'objects'], ['routes']);



// TEST CASES
helloworld.speak(4);
goodbyeworld.speak("Bryan");
hello_object.speak(5);
randomobject.add(3, 7);
//EVAL
eval("var newTest = 'Hi';");
console.log(newTest);
