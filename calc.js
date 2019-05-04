function readInput() {

    let numberIn = document.getElementById('inputNumber').value;

    if (isNaN(numberIn)) {
        numberIn = "Is not a number";
    }
    let outputNumber = document.getElementById('display1');
    outputNumber.innerHTML = 'You entered: ' + numberIn;

}

function sum(){
    var i= 0;
    let answer = 0;
    let numberIn = document.getElementById('inputSumNumber').value;
    let numberEntered = parseInt(numberIn);

   if (!isNaN(numberEntered)){ 
      for (i = 0; i <= numberEntered; i++){
         answer += i;
      }
   } else {
      answer = 'Not a Number';
   }


   let outputNumber = document.getElementById('sumFunction');
   outputNumber.innerHTML = 'You entered: ' + answer;

}

function clickMachine() {

   let num1 = document.getElementById("enterNum1").value;
   let num2 = document.getElementById("enterNum2").value;
   var result = 0;
   let num1Float = parseFloat(num1);
   let num2Float = parseFloat(num2);
   if (!isNaN(num1Float) & !isNaN(num2Float)){

      result = num1Float + num2Float;
   } else {
      result = "You are missing a number";
   }
   let outputNumber = document.getElementById('displayAdd');
   outputNumber.innerHTML = 'You entered: ' + result;

}

