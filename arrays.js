var ingredient1 = "bread";
var ingredient2 = "mild cheese";
var ingredient3 = "sharp cheese";
var ingredient4 = "butter";
var ingredient5 = "tomato";
var ingredient6 = "garlic";


var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray (array, element) {
[element, ...array];
return array;
} 

function destructivelyAddElementToBeginningOfArray (array, element) {
array.unshift (element);
return array;
}

function addElementToEndOfArray (array, element) {
[array,...element];
  return array;
}

