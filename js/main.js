let numbers = document.getElementsByClassName("numbers");
let operators = document.getElementsByClassName("operators");
let display = document.getElementById("display");
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");
let back = document.getElementById("back");
let result = "";
// let savedValue = null;
// let operator = "";



for (var i = 0; i < numbers.length; i++) {
  numbers[i].onclick = function(){
     getValue(this);

  };
}

for (var i = 0; i < operators.length; i++) {
  operators[i].onclick = function() {
    getValue(this);
  };
}

function getValue(element){
  result += element.value;
  display.innerHTML = result;
};


function clearValue() {
  result = "";
  display.innerHTML = result;
}

clear.addEventListener('click', clearValue);



function clearPrevious() {
  result = result.substring(0,result.length-1);
  display.innerHTML = result;
}

back.addEventListener('click', clearPrevious);


function calcul() {
  var convertString = eval(result);
  display.innerHTML = convertString;
}

equal.addEventListener('click', calcul);
