// function getValue(value) {
//   document.getElementByTagName("input").value;
// }


function calculer(operandeGauche, operation, operandeDroite) {
    var resultat;
    switch (operation) {
    case "+":
        resultat = operandeGauche + operandeDroite;
        break;
    case "-":
        resultat = operandeGauche - operandeDroite;
        break;
    case "*":
        resultat = operandeGauche * operandeDroite;
        break;
    case "/":
        resultat = operandeGauche / operandeDroite;
        break;
    }
    return resultat;
}


var inputs = document.getElementsByTagName("input");
var result = document.getElementById("affichage");
var array = [];
var getOperatorClass = document.getElementsByClassName("operator");
var getEqualId = document.getElementById("equal");
var getNumberClass = document.getElementsByClassName("number");

// $('input').click(function(){
//   var value = $(this).val();
//   for (var i = 0; i < inputs.length; i++) {
//     if (inputs[i].classList.contains("operator")) {
//       break;
//       return value;
//     }
//   }
//   result.innerHTML += value;
//   array.push(value);
// });



function getValueAndPushArray(element) {
  result.innerHTML += element.value;
  array.push(element.value);
}

for (var i = 0; i < inputs.length; i++) {
  inputs[i].onclick = function() {
    getValueAndPushArray(this);
    // if (inputs[i].id.contains=(equal)) {
    //
    // }
  };
}

console.log(array);

if (true) {

}
