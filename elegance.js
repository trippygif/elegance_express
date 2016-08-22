/**
 * Created by byoelin on 8/22/2016.
 */
module.exports = new Elegance;
var camelCase = require('camelcase');
var fs = require("fs");

function Elegance() {

    this.initModules = function(arrayModules){
        var _ = require("underscore");

        _.each(arrayModules, function(moduleDir){
            //console.log(moduleDir);
            var fileNames = fs.readdirSync("./"+moduleDir);

            console.log(fileNames);
            _.each(fileNames, function(fileName){
                console.log(moduleDir);
                eval("GLOBAL."+fileName+" = require('./" +moduleDir+"/"+fileName+"');");
            })
        })
    };



    this.initialize = function(express, arrayModules, arrayRoutes){

       this.initModules(arrayModules);

    };
}


