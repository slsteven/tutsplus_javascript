// Given an array of arrays, implement an iterator class to allow the client to traverse and remove
// elements in the array list.

// This iterator should provide three public class member functions:

// 1. has_next() - Returns boolean
// - return true or false if there is another element in the set
// (the set is the subarray in the large array)

// 2. next() - Returns int
// - return the value of the next element in the array

// 3. remove() - Returns void
// - remove the last element returned by the iterator.
// - That is, remove the element that the previous next() returned
// - This method can be called only once per call to next(), otherwise, an exception will be thrown.

// You should be able to print the elements
// Given: [[],[1,2,3],[4,5],[],[],[6],[7,8],[],[9],[10],[]]
// Print: 1 2 3 4 5 6 7 8 9 10

// You should be able to remove elements and mutate the given array
// Given: [[],[1,2,3],[4,5],[],[],[6],[7,8],[],[9],[10],[]]
// After you remove the even values (e.g. 2, 4, 6, 8, 10), your array should be:
// [[],[1,3],[5],[],[],[],[7],[],[9],[],[]]
// Print: 1 3 5 7 9
var _ = require('underscore')

function Iterator(arr){
  this.arr = arr;
}

Iterator.prototype.has_next = function(val){
  var my_arr = this.arr;
  for(var i = 0; i < my_arr.length; i++){
    if(Object.prototype.toString.call(my_arr[i]) === '[object Array]'){
      for(var j = 0; j < my_arr[i].length; j++){
        if(my_arr[i][j] === val){
          if(my_arr[i][j+1]){
            return true;
          } else {
            return false;
          }
        }
      }
    }
  }
  return false;
}

Iterator.prototype.print = function(){
  console.log(_.flatten(this.arr))
}

Iterator.prototype.next = function(val){
  var check = this.has_next(val);
  if(check){
    var flat_arr = _.flatten(this.arr, true);
    var val_idx = _.indexOf((flat_arr), val);
    return flat_arr[val_idx + 1]
  } else {
    return "has no next"
  }
}

Iterator.prototype.remove = function(val){
  var my_arr = this.arr;
  for(var i = 0; i < my_arr.length; i++){
    if(Object.prototype.toString.call(my_arr[i]) === '[object Array]'){
      for(var j = 0; j < my_arr[i].length; j++){
        if(my_arr[i][j] === val){
          var idx_to_delete = my_arr[i].indexOf(val);
          my_arr[i].splice(idx_to_delete, 1);
        }
      }
    }
  }
  return my_arr;
}

var arr = [[],[1,2,3],[4,5],[],[],[6],[7,8],[],[9],[10],[]];
var my_iterator = new Iterator(arr);
my_iterator.remove(1)
my_iterator.print();

//var result = my_iterator.has_next(4);
//var result = my_iterator.next(7);
//console.log(result);

