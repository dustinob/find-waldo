// var myFn = function() {
//   console.log("I am function");
// }

// myFn.someAttribute = 42;
// console.log(myFn.someAttribute);

// function runner(f) {
//   f();
// }
// runner(myFn);

// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
arr.forEach(function(element, index) {
    if (element === "Waldo") {
      found(index);   // execute callback
    }
  });
}
function actionWhenFound(index) {

  console.log("Found Waldo at index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);