
// var input = document.getElementById("input");
// function myfunctioN(number) {
//      if (input.value==="0") {
//         input.value = number;
//      }
//      else{
//         inputField.value += number;
//      }
// }
var inputField = document.getElementById('inputField');

function addSymbolToInput(number) {
    if (inputField.value === '0') {
        inputField.value = number;
    } else {
        inputField.value += number;
    };
};

function deleteAllSymbols() {
    inputField.value = 0;
};
function getResult() {
    inputField.value = eval(inputField.value);
  };
// function rafa(a , b) {
//     let c =a*b;
    
// }

// console.log(rafa(3,4));


// const str = "test";
// const arr =[1,2,4 ]

// console.log(str.toUpperCase());


// const fruit = "Some fruit"

// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world"

// console.log(logg.slice(5));
// console.log(logg.substring( 6 , 11 ));