/**
 * Created by byoelin on 8/25/2016.
 */
module.exports = new GoodByeWorld;

function GoodByeWorld(){
    this.speak = function(param){
        console.log("Goodbye World! " + param);
    };
}