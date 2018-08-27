let numbers = document.getElementsByClassName("numbers");
let operators = document.getElementsByClassName("operators");
let display = document.getElementById("display");
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");
let back = document.getElementById("back");
// let result = "";
// let convertString;
// let numbersCaption;
// let operatorsCaption;
let displayIsResult = false;


for (var i = 0; i < numbers.length; i++) {
  numbers[i].onclick = function(){
    getValue(this);
  };
}

// for (var i = 0; i < operators.length; i++) {
//   operators[i].onclick = function() {
//     getValue(this);
//   };
// }

function getValue(element){
  if (displayIsResult) {
    display.innerHTML = element.value;
    displayIsResult = false;
  } else {
    display.innerHTML += element.value;
  }

};


function clearValue() {
  display.innerHTML = "";
}

clear.addEventListener('click', clearValue);



function clearPrevious() {
  display.innerHTML = result.substring(0,result.length-1);
}

back.addEventListener('click', clearPrevious);


// function calcul() {
//   var convertString = eval(result);
//   display.innerHTML = convertString;
// }
//
// equal.addEventListener('click', calcul);

// function operation(+, -, *, /) {
//   let numbersCaption = result;
//   if (true) {
//
//   }
//
// }
