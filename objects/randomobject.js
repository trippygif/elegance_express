/**
 * Created by byoelin on 8/25/2016.
 */
module.exports = new RandomObject;

function RandomObject(){
    this.add = function(param1, param2){
        var sum = param1 + param2;
            console.log(sum);
    };
}