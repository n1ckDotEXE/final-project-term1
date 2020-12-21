const click0 = document.querySelector("#button0").addEventListener("click", function() {
    activeNum = 0;
    if (activeNum === 0) {
        document.querySelector("#calcScreenText").innerHTML = "0";
    } else {
        document.querySelector("#calcScreenText").innerHTML = activeString += "0";
    }
});
const click1 = document.querySelector("#button1").addEventListener("click", function() {
    activeNum = 1;
    if (activeNum === 0) {
        document.querySelector("#calcScreenText").innerHTML = "1";
    } else {
        document.querySelector("#calcScreenText").innerHTML = activeString += "1";
    }
});
const click2 = document.querySelector("#button2").addEventListener("click", function() {
    activeNum = 2;
    if (activeNum === 0) {
        document.querySelector("#calcScreenText").innerHTML = "2";
    } else {
        document.querySelector("#calcScreenText").innerHTML = activeString += "2";
    }
});
const click3 = document.querySelector("#button3").addEventListener("click", function() {
    activeNum = 3;
    if (activeNum === 0) {
        document.querySelector("#calcScreenText").innerHTML = "3";
    } else {
        document.querySelector("#calcScreenText").innerHTML = activeString += "3";
    }
});
const click4 = document.querySelector("#button4").addEventListener("click", function() {
    activeNum = 4;
    if (activeNum === 0) {
        document.querySelector("#calcScreenText").innerHTML = "4";
    } else {
        document.querySelector("#calcScreenText").innerHTML = activeString += "4";
    }
});
const click5 = document.querySelector("#button5").addEventListener("click", function() {
    activeNum = 5;
    if (activeNum === 0) {
        document.querySelector("#calcScreenText").innerHTML = "5";
    } else {
        document.querySelector("#calcScreenText").innerHTML = activeString += "5";
    }
});
const click6 = document.querySelector("#button6").addEventListener("click", function() {
    activeNum = 6;
    if (activeNum === 0) {
        document.querySelector("#calcScreenText").innerHTML = "6";
    } else {
        document.querySelector("#calcScreenText").innerHTML = activeString += "6";
    }
});
const click7 = document.querySelector("#button7").addEventListener("click", function() {
    activeNum = 7;
    if (activeNum === 0) {
        document.querySelector("#calcScreenText").innerHTML = "7";
    } else {
        document.querySelector("#calcScreenText").innerHTML = activeString += "7";
    }
});
const click8 = document.querySelector("#button8").addEventListener("click", function() {
    activeNum = 8;
    if (activeNum === 0) {
        document.querySelector("#calcScreenText").innerHTML = "8";
    } else {
        document.querySelector("#calcScreenText").innerHTML = activeString += "8";
    }
});
const click9 = document.querySelector("#button9").addEventListener("click", function() {
    activeNum = 9;
    if (activeNum === 0) {
        document.querySelector("#calcScreenText").innerHTML = "9";
    } else {
        document.querySelector("#calcScreenText").innerHTML = activeString += "9";
    }
});
const clickAdd = document.querySelector("#buttonAdd").addEventListener("click", function() {
    total += activeNum;
    activeString = activeNum;
    document.querySelector("#calcScreenText").innerHTML = activeString += " + ";
});
const clickSubtract = document.querySelector("#buttonSubtract").addEventListener("click", function() {
    total += activeNum;
    activeString = activeNum;
    document.querySelector("#calcScreenText").innerHTML = activeString += " - ";
});
const clickMultiply = document.querySelector("#buttonMultiply").addEventListener("click", function() {
    total += activeNum;
    activeString = activeNum;
    document.querySelector("#calcScreenText").innerHTML = activeString += " * ";
});
const clickDivide = document.querySelector("#buttonDivide").addEventListener("click", function() {
    total += activeNum;
    activeString = activeNum;
    document.querySelector("#calcScreenText").innerHTML = activeString += " / ";
});
const clickEqual = document.querySelector("#buttonEqual").addEventListener("click", function() {
    activeNum = total;
    document.querySelector("#calcScreenText").innerHTML = total;
});
const clickClear = document.querySelector("#buttonClear").addEventListener("click", function() {
    document.querySelector("#calcScreenText").innerHTML = "0";
    activeNum = 0;
    activeString = "";
    total = 0;
});

let total = 0;
let activeNum = 0;
let previousNum = 0;
let activeString = "";

// const calculate = button => {
//     if (button === ) {
//         document.querySelector("#calcScreenText").innerHTML = total;
//     } else if () {
//         document.querySelector("#calcScreenText").innerHTML = document.querySelector(button).textContent;
//     } else {
        
//     }

    

// }