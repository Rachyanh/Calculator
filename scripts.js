var arr = []; //to store numbers pressed
var arrNbr = 0; //number converted from array
var first = 0; //to store first number pressed
var second = 0; //to store second number pressed
var operator = []; //to store operator pressed
const button = document.querySelector('button');
const display = document.querySelector('.display');

function ac() {
  arr = [];
  first = 0;
  display.innerText = 0;
}

function nbr(n) {
  arr.push(document.getElementById(n).innerText);
  arrNbr = arr.join('');
  display.innerText = arrNbr;
}

function zero() {
  if (arr.length === 0) {
    display.innerText = 0;
  } else {
    arr.push(0);
    arrNbr = arr.join('');
    display.innerText = arrNbr;
  }
}

function dec() {
  arr.push('.');
  display.innerText = arrNbr + '.';
}

function neg() {
  arrNbr *= -1;
  display.innerText = arrNbr;
}

function percent() {
  arrNbr /= 100;
  display.innerText = arrNbr;
}

function plus() {
  if (first === 0) {
    first = arrNbr;
    arr =[];
    arrNbr = 0;
    operator.push('+');
  } else {
    display.innerText = Number(first) + Number(arrNbr);
    first = Number(first) + Number(arrNbr);
    arr = [];
  }
}

function minus() {
  if (first === 0) {
    first = arrNbr;
    arr =[];
    arrNbr = 0;
    operator.push('-');
  } else {
    display.innerText = Number(first) - Number(arrNbr);
    first = Number(first) - Number(arrNbr);
    arr = [];
  }
}

function multi() {
  if (first === 0) {
    first = arrNbr;
    arr =[];
    operator = '*';
  } else {
    second = arrNbr;
    arr = [];
  }
}

function equal() {
  let outcome = 0;
  if (operator.length == 1) {
    if (operator[0] == '+') {
      outcome = Number(first) + Number(arrNbr);
    } else if (operator == '-') {
      outcome = Number(first) - Number(arrNbr);
    } else if (operator == '*') {
      outcome = Number(first) * Number(arrNbr);
    } else if (operator == '/') {
      outcome = Number(first) / Number(arrNbr);
    }
  } else {
    if (operator[0] == '+' ) {
      outcome = Number(first) + Number(arrNbr);
    } else if (operator == '-') {
      outcome = Number(first) - Number(arrNbr);
    }
  }
  display.innerText = outcome;
  first = outcome;
  arr = [];
  operator = [];
}
