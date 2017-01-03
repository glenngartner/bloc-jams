/**
 * Created by glenn on 1/2/2017.
 */

var forEach = function(array, callback){
    for (var i = 0; i < array.length; i ++){
        callback(array[i]);
    }
}