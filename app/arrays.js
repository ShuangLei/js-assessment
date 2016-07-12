exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        return i;
      }      
    }
    return -1;
  },

  sum: function(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    var arr = arr1.concat(arr2);
    return arr;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    var flag = {};
    var result = [];
    for(var i = 0; i < arr.length; i++){
      if(!flag[arr[i]]){
        flag[arr[i]] = 1;
      } else if(flag[arr[i]] === 1){
        result.push(arr[i]);
        flag[arr[i]] = 2;
      }
    }
    return result;
  },

  square: function(arr) {
    for(var i = 0; i < arr.length; i++){
      arr[i] = arr[i] * arr[i];
    }
    return arr;
  },

  findAllOccurrences: function(arr, target) {
    var result = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === target){
        result.push(i);
      }
    }
    return result;
  }
};
