let numbers = document.getElementsByClassName("numbers");
let operators = document.getElementsByClassName("operators");
let display = document.getElementById("display");
let result = "";

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

if (getValue(this) === "Clear") {
  result = "0";
}
