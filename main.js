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
//Question 6: min - returns the minimum value in an array
min : function (array) {
  var minimum=
  for (var i = 0; i < array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i];
    }
  return minimum;
  }
},
//HOLD OFF - Question 7: shuffle - Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle. Don't worry about implementing that exact shuffle alogrithm. Start by creating your own simple shuffle.
shuffle : function (array) {

},

//Question 8: Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.
sample : function (number) {
  var n = []
for (var i = 0; i < array.length; i++) {
  var randoms = array[Math.floor(Math.random() * array.length)];
}
return n
},

//Question 9: difference - returns the values from array that are not present in the other array.
//what am I doing wrong???

difference : function (array1, array2) {
var arraydiff=[]
for (var i = 0; i < array1.length; i++) {
  if (array1[i] != array2[i])
  arraydiff.push(array1[i])
}
for (var i = 0; i < array2.length; i++) {
  if (array2[i] != array1[i])
  arraydiff.push(array2[i])
}
return arraydiff
};



//Question 10: indexOf - Returns the index at which value can be found in the array, or -1 if value is not present in the array.
//best way to access index and number???
indexOfExample : function (number) {
  if (indexOf(number) === -1) {
    return -1
  }
  else {
    return indexOf(number)
  }
};

//Question 11: pluck - extracts a list of property values and returns them in an array.
pluck : function (array) {

},





};
