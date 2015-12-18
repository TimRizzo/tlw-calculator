// thelittlewaves Calculator
// operator 1(+), 2(-), 3(*), 4(/), 5(.)

var total = 0,
		operator = 0,
    operandA = 0,
    operandB = 0,
    memory = 0,
    decimal = false;

var calculate = function() {
	if (operator === 1) {
		total = operandA + operandB; 
    document.getElementById("display").innerHTML = total;
    operandA = total;		
  } else if (operator === 2) {
  	total = operandA - operandB;
    document.getElementById("display").innerHTML = total;
    operandA = total;		
  } else if (operator === 3) {
  	total = operandA * operandB;
    document.getElementById("display").innerHTML = total;
    operandA = total;		
  } else if (operator === 4) {
  	total = operandA / operandB;
    if (isNaN(total)) {
    	document.getElementById("display").innerHTML = "C'mon, now";    
    total = 0;    
    } else {
    document.getElementById("display").innerHTML = total;
    operandA = total;		
    }
  }
  operandB = 0;
  decimal = false;
};

var updateDisplay = function(val) {		
  if (operator > 0) {
  	if (decimal) {
    	operandB = operandB + val / 10;
    } else {
    operandB = operandB * 10 + val;	    
    }
  document.getElementById("display").innerHTML = operandB;
  } else {
  	if (decimal) {    
    	operandA = operandA + val / 10;
    } else {
    operandA = operandA * 10 + val;	    
    }
  document.getElementById("display").innerHTML = operandA;
  }  
};

$("#clear").click(function() {
	total = 0;
  operandA = 0;
  operandB = 0;
  operator = 0;
  decimal = false;
  document.getElementById("display").innerHTML = total; 
});

$("#memSave").click(function() {
	if (total > 0) {  
    memory = total;	    
    document.getElementById("display").innerHTML = total;
  } else {
  	document.getElementById("display").innerHTML = "C'mon now ";
  }
	total = 0;
  operandA = 0;
  operandB = 0;
  operator = 0;
  decimal = false;
});

$("#memClear").click(function() {
	memory = 0;
});

$("#memRecall").click(function() {
	if (operator > 0) {
  	operandB = memory;
    document.getElementById("display").innerHTML = operandB;
  } else {
  	operandA = memory;
    document.getElementById("display").innerHTML = operandA;
  }	
});

$("#1").click(function() {		
	updateDisplay(1);
});

$("#2").click(function() {
	updateDisplay(2);
});

$("#3").click(function() {
	updateDisplay(3);
});

$("#4").click(function() {
	updateDisplay(4);
});

$("#5").click(function() {
	updateDisplay(5);
});

$("#6").click(function() {
	updateDisplay(6);
});

$("#7").click(function() {
	updateDisplay(7);
});

$("#8").click(function() {
	updateDisplay(8);
});

$("#9").click(function() {
	updateDisplay(9);
});

$("#0").click(function() {
	updateDisplay(0);
});

$("#decimal").click(function() {
	if (!decimal) {  
  	decimal = true;
  } else {
  	document.getElementById("display").innerHTML = "C'mon, now";
    operandA = 0;
    operandB = 0;
    operator = 0; 
    decimal = false;
  }
});

$("#add").click(function() {
	calculate();  
  operator = 1;
});

$("#subtract").click(function() {
	calculate();  
  operator = 2;
});

$("#multiply").click(function() {
	calculate();	  
  operator = 3;
});

$("#divide").click(function() {
	calculate();	  
  operator = 4;
});

$("#eval").click(function() {
	calculate(); 
  operandA = 0;
  operator = 0; 
  decimal = false;
});
