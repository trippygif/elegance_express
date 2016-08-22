/**
 * Created by byoelin on 8/22/2016.
 */

module.exports = new HelloObject;

function HelloObject(){
    this.speak = function(param){
        console.log("Hello World! " + param);
    };
}