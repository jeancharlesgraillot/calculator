let numbers = document.getElementsByClassName("numbers");
let operators = document.getElementsByClassName("operators");
let display = document.getElementById("display");
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");
let back = document.getElementById("back");
let result = "";
// let savedValue = null;
// let operator = "";


//Browse inputs with numbers class and get their values
for (var i = 0; i < numbers.length; i++) {
  numbers[i].onclick = function(){
     getValue(this);

  };
}

//Browse inputs with operators class and get their values
for (var i = 0; i < operators.length; i++) {
  operators[i].onclick = function() {
    getValue(this);
  };
}

//Function to get value of browsed inputs and display in display div
function getValue(element){
  result += element.value;
  display.innerHTML = result;
};

//Function to clear what is displayed in display div
function clearValue() {
  result = "";
  display.innerHTML = result;
}

//Eventlistener to call clearValue function
clear.addEventListener('click', clearValue);


//Function to clear previous character that is displayed in display div
function clearPrevious() {
  result = result.substring(0,result.length-1);
  display.innerHTML = result;
}

//Eventlistener to call clearPrevious function
back.addEventListener('click', clearPrevious);

//Function who checks the result string, converts into numbers and do the operation
function calcul() {
  var convertString = eval(result);
  display.innerHTML = convertString;
}

//EventListener to call calcul function when equal is clicked and display result
equal.addEventListener('click', calcul);
