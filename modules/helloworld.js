/**
 * Created by byoelin on 8/22/2016.
 */

module.exports = new HelloWorld;

function HelloWorld(){
    this.speak = function(param){
        console.log("Hello World! " + param);
    };
}
