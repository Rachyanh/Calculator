var arr = []; //to store numbers pressed
var arrNbr = 0; //number converted from array
var first = 0; //to store first number pressed
var second = 0; //to store second number pressed
var operator = []; //to store operators pressed
const button = document.querySelector('button');
const display = document.querySelector('.display');

function ac() {
  arr = [];
  operator = [];
  first = 0;
  second = 0;
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
  if (operator.length == 0) {  //for a+
    first = arrNbr;
    arr =[];
    arrNbr = 0;
    operator.push('+');
  } else if (operator.length ==1) { //for a+b+
      if (operator[0] == '+') {
      first = Number(first) + Number(arrNbr);
      display.innerText = first;
      arr = [];
    } else if (operator[0] == '-') { //for a-b+
      first = Number(first) - Number(arrNbr);
      display.innerText = first;
      arr = [];
      operator[0] = '+';
    } else if (operator[0] == '*') { //for a*b+
      first = Number(first) * Number(arrNbr);
      display.innerText = first;
      arr = [];
      operator[0] = '+';
    } else if (operator[0] == '/') { //for a/b+
      first = Number(first) / Number(arrNbr);
      display.innerText = first;
      arr = [];
      operator[0] = '+';
    }
  } else if (operator[0] == '+') { //for a+b*c+ and a+b/c+
    if (operator[1] == '*') {
      first = Number(first) + Number(second) * Number(arrNbr);
      display.innerText = first;
      second = 0;
      arr = [];
      operator = ['+'];
    } else if (operator[1] == '/') {
      first = Number(first) + Number(second) / Number(arrNbr);
      display.innerText = first;
      second = 0;
      arr = [];
      operator = ['+'];
    }
  } else if (operator[0] == '-') { //for a-b*c+ and a-b/c+
    if (operator[1] == '*') {
      first = Number(first) - Number(second) * Number(arrNbr);
      display.innerText = first;
      second = 0;
      arr = [];
      operator = ['+'];
    } else if (operator[1] == '/') {
      first = Number(first) - Number(second) / Number(arrNbr);
      display.innerText = first;
      second = 0;
      arr = [];
      operator = ['+'];
    }
  }
}

function minus() {
  if (operator.length == 0) {
    first = arrNbr;
    arr =[];
    arrNbr = 0;
    operator.push('-');
  } else if (operator[0] == '+') {
    first = Number(first) + Number(arrNbr);
    display.innerText = first;
    arr = [];
    operator[0] = '-';
  } else if (operator[0] == '-') {
    first = Number(first) - Number(arrNbr);
    display.innerText = first;
    arr = [];
  } else if (operator[0] == '*') {
    first = Number(first) * Number(arrNbr);
    display.innerText = first;
    arr = [];
    operator[0] = '-';
  } else if (operator[0] == '/') {
    first = Number(first) / Number(arrNbr);
    display.innerText = first;
    arr = [];
    operator[0] = '-';
  } else if (operator[0] == '+') { //for a+b*c- and a+b/c-
    if (operator[1] == '*') {
      first = Number(first) + Number(second) * Number(arrNbr);
      display.innerText = first;
      second = 0;
      arr = [];
      operator = ['-'];
    } else if (operator[1] == '/') {
      first = Number(first) + Number(second) / Number(arrNbr);
      display.innerText = first;
      second = 0;
      arr = [];
      operator = ['-'];
    }
  } else if (operator[0] == '-') { //for a-b*c- and a-b/c-
    if (operator[1] == '*') {
      first = Number(first) - Number(second) * Number(arrNbr);
      display.innerText = first;
      second = 0;
      arr = [];
      operator = ['-'];
    } else if (operator[1] == '/') {
      first = Number(first) - Number(second) / Number(arrNbr);
      display.innerText = first;
      second = 0;
      arr = [];
      operator = ['-'];
    }
  }
}

function multi() {
  if (first == 0) {
    first = arrNbr;
    arr =[];
    operator.push('*');
  } else if (operator[0] == '*') {
    first = Number(first) * Number(arrNbr);
    display.innerText = first;
    arr = [];
  } else if (operator[0] == '/') {
    first = Number(first) / Number(arrNbr);
    display.innerText = first;
    arr = [];
    operator[0] = '*';
  } else if (operator.length == 1) { //case when first operator is +/-
    second = arrNbr;
    arr = [];
    operator.push('*');
  } else if (operator[1] == '*') { //case when first operator is +/-, second is *
    second = Number(second) * Number(arrNbr);
    display.innerText = second;
    arr = [];
  } else { //case when first operator is +/-, second is /
    second = Number(second) / Number(arrNbr);
    display.innerText = second;
    arr = [];
    operator[1] = '*';
  }
}

function divide() {
  if (first == 0) {
    first = arrNbr;
    arr =[];
    operator.push('/');
  } else if (operator[0] == '*') {
    first = Number(first) * Number(arrNbr);
    display.innerText = first;
    arr = [];
  } else if (operator[0] == '/') {
    first = Number(first) / Number(arrNbr);
    display.innerText = first;
    arr = [];
    operator[0] = '/';
  } else if (operator.length == 1) { //case when first operator is +/-
    second = arrNbr;
    arr = [];
    operator.push('/');
  } else if (operator[1] == '*') { //case when first operator is +/-, second is *
    second = Number(second) * Number(arrNbr);
    display.innerText = second;
    arr = [];
    operator[1] = '/';
  } else {                         //case when first operator is +/-, second is /
    second = Number(second) / Number(arrNbr);
    display.innerText = second;
    arr = [];
  }
}

function equal() {
  let outcome = 0;
  if (operator.length == 1) {
    if (operator[0] == '+') {
      outcome = Number(first) + Number(arrNbr);
    } else if (operator[0] == '-') {
      outcome = Number(first) - Number(arrNbr);
    } else if (operator[0] == '*') {
      outcome = Number(first) * Number(arrNbr);
    } else if (operator[0] == '/') {
      outcome = Number(first) / Number(arrNbr);
    }
  } else {
    if (operator[0] == '+' ) {
      if (operator[1] == '*') {
        outcome = Number(first) + Number(second) * Number(arrNbr);
      } else if (operator[1] == '/') {
        outcome = Number(first) + Number(second) / Number(arrNbr);
      }
    } else if (operator == '-') {
      if (operator[1] == '*') {
        outcome = Number(first) - Number(second) * Number(arrNbr);
      } else if (operator[1] == '/') {
        outcome = Number(first) - Number(second) / Number(arrNbr);
      }
    }
  }
  display.innerText = outcome;
  arrNbr = outcome;
  first = 0;
  arr = [];
  operator = [];
}
