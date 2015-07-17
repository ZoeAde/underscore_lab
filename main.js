var object_ = {
//DONE - Question 1: average - returns the average value in a given array
average : function (array) {
  var total = array.reduce(function(a, b) {return a + b});
  return total/array.length;
},
//DONE - Question 2: contains - returns true is a given value is present in an array
contains : function (number) {
  for (var i = 0; i < array.length; i++) {
    if (array.indexOf(i) === number) {
      console.log(true)
    }
  }
},
//DONE - Question 3: first - returns the first element in an array
first : function (array) {
  return array[0];
},
//DONE - Question 4: last - returns the last element in an array
last : function (array) {
  return array.slice(-1)[0]
},

//DONE - Question 5: max - returns the maximum value in an array
max : function (array) {
  var largest=0
  for (var i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  return largest;
  }
},
//DONE - Question 6: min - returns the minimum value in an array
min : function (array) {
  var minimum = Infinity
  for (var i = 0; i < array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i];
    }
  return minimum;
  }
},
//DONE- Question 7: shuffle - Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle. Don't worry about implementing that exact shuffle alogrithm. Start by creating your own simple shuffle.
shuffle : function (array) {
  var currentIndex = array.length, tempIndex, randomIndex;
  while (0 != currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1
    tempIndex = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempIndex;
  }
    return array;
  },

/* DONE - Question 8: Produce a random sample from the list.
Pass a number to return n random elements from the list.
Otherwise a single random item will be returned.*/
var sample = function (array) {
  var els = [];
  var randomElement = 0;
  var sampleSize = array[Math.floor(Math.random() * array.length)];
for (var i = 0; i < sampleSize; i++) {
    randomElement = array[Math.floor(Math.random() * sampleSize)];
    els.push(randomElement);
}
return els;
},

//Question 9: difference - returns the values from array
//that are not present in the other array.


//DONE - Question 10: indexOf - Returns the index at which value can be found in the array, or -1 if value is not present in the array.
indexOfExample : function (number) {
  if (array.indexOf(number) === -1) {
    return -1
  }
  else {
    return array.indexOf(number)
  }
},

//DONE - Question 11: pluck - extracts a list of property values and returns them in an array.
    value = [];
    for (var i = 0; i < array1.length; i++) {
      value.push(array1[i].name);
    }
    return value;
