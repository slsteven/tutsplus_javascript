// Kth most frequent number from an array

var arr = [1, 30, 2, 2, 5, 30, 5, 2];

function kthinArray(arr){
  var hash = {};
  var count = 1;
  var sorted = arr.sort(function(a,b){ return a - b;});
  console.log(sorted);
  for(var i = 0; i < arr.length; i++){
    if(arr[i] == arr[i+1]){
      count++;
    }
    else {
      hash[arr[i]] = count;
      count = 1;
    }
  }
  var new_arr = [];
  for(var obj in hash){
    //use count for index
    if(new_arr[hash[obj]] == null){
     new_arr[hash[obj]] = [obj];
    } else {

      (new_arr[hash[obj]]).push(obj);
    }
  }
  console.log("new", new_arr);
}

var result = kthinArray(arr);
