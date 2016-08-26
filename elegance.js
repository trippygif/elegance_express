/**
 * Created by byoelin on 8/22/2016.
 */
module.exports = new Elegance;
var camelCase = require('camelcase');
var fs = require("fs");

function Elegance() {


    /*
    create an array of module folders. in this instance we used
    the folders 'modules' and 'objects'.
     */

    this.initModules = function(arrayModules){
        var _ = require("underscore");

        _.each(arrayModules, function(moduleDir){

            var fileNames = fs.readdirSync("./"+moduleDir);


            _.each(fileNames, function(fileName){
                fileName = fileName.replace(/.js/,'');
                eval("GLOBAL."+fileName+" = require('./" +moduleDir+"/"+fileName+"');");
            })
        })
    };



    this.initialize = function(express, arrayModules, arrayRoutes){

       this.initModules(arrayModules);

    };
}




