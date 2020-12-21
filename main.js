window.onload = function() {
    localStorage.setItem("totalNum", 0);
}

const calcScreen = document.querySelector("#calcScreenText");

let total = 0;
let activeNum = 0;
let previousNum = 0;
let activeString = "";
let lastOperator = 0;

function changeCSS(cssFile, cssLinkIndex) {
    let oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
    let newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
const purple = document.querySelector("#buttonPurple").addEventListener("click", function() {
    changeCSS("./themes/purpleStyle.css", 0);
});
const green = document.querySelector("#buttonGreen").addEventListener("click", function() {
    changeCSS("./themes/greenStyle.css", 0);
});
const yellow = document.querySelector("#buttonYellow").addEventListener("click", function() {
    changeCSS("./themes/yellowStyle.css", 0);
});
const orange = document.querySelector("#buttonOrange").addEventListener("click", function() {
    changeCSS("./themes/orangeStyle.css", 0);
});

const click0 = document.querySelector("#button0").addEventListener("click", function() {
    activeNum = 0;
    if (calcScreen.innerHTML === "0") {
        calcScreen.innerHTML = "0";
    } else {
        calcScreen.innerHTML = "";
        calcScreen.innerHTML += "0";
    }
    previousNum = 0;
});
const click1 = document.querySelector("#button1").addEventListener("click", function() {
    activeNum = 1;
    if (calcScreen.innerHTML === "0") {
        calcScreen.innerHTML = "1";
    } else {
        calcScreen.innerHTML = "";
        calcScreen.innerHTML += "1";
    }
    previousNum = 1;
});
const click2 = document.querySelector("#button2").addEventListener("click", function() {
    activeNum = 2;
    if (calcScreen.innerHTML === "0") {
        calcScreen.innerHTML = "2";
    } else {
        calcScreen.innerHTML = "";
        calcScreen.innerHTML += "2";
    }
    previousNum = 2;
});
const click3 = document.querySelector("#button3").addEventListener("click", function() {
    activeNum = 3;
    if (calcScreen.innerHTML === "0") {
        calcScreen.innerHTML = "3";
    } else {
        calcScreen.innerHTML = "";
        calcScreen.innerHTML += "3";
    }
    previousNum = 3;
});
const click4 = document.querySelector("#button4").addEventListener("click", function() {
    activeNum = 4;
    if (calcScreen.innerHTML === "0") {
        calcScreen.innerHTML = "4";
    } else {
        calcScreen.innerHTML = "";
        calcScreen.innerHTML += "4";
    }
    previousNum = 4;
});
const click5 = document.querySelector("#button5").addEventListener("click", function() {
    activeNum = 5;
    if (calcScreen.innerHTML === "0") {
        calcScreen.innerHTML = "5";
    } else {
        calcScreen.innerHTML = "";
        calcScreen.innerHTML += "5";
    }
    previousNum = 5;
});
const click6 = document.querySelector("#button6").addEventListener("click", function() {
    activeNum = 6;
    if (calcScreen.innerHTML === "0") {
        calcScreen.innerHTML = "6";
    } else {
        calcScreen.innerHTML = "";
        calcScreen.innerHTML += "6";
    }
    previousNum = 6;
});
const click7 = document.querySelector("#button7").addEventListener("click", function() {
    activeNum = 7;
    if (calcScreen.innerHTML === "0") {
        calcScreen.innerHTML = "7";
    } else {
        calcScreen.innerHTML = "";
        calcScreen.innerHTML += "7";
    }
    previousNum = 7;
});
const click8 = document.querySelector("#button8").addEventListener("click", function() {
    activeNum = 8;
    if (calcScreen.innerHTML === "0") {
        calcScreen.innerHTML = "8";
    } else {
        calcScreen.innerHTML = "";
        calcScreen.innerHTML += "8";
    }
    previousNum = 8;
});
const click9 = document.querySelector("#button9").addEventListener("click", function() {
    activeNum = 9;
    if (calcScreen.innerHTML === "0") {
        calcScreen.innerHTML = "9";
    } else {
        calcScreen.innerHTML = "";
        calcScreen.innerHTML += "9";
    }
    previousNum = 9;
});

const clickAdd = document.querySelector("#buttonAdd").addEventListener("click", function() {
    total += activeNum;
    activeNum = 0;
    localStorage.setItem("totalNum", total);
    calcScreen.innerHTML = localStorage.getItem("totalNum");
    document.querySelector("#calcHistoryText").innerHTML = "Added";
    lastOperator = 1;
});
const clickSubtract = document.querySelector("#buttonSubtract").addEventListener("click", function() {
    total -= activeNum;
    activeNum = 0;
    localStorage.setItem("totalNum", total);
    calcScreen.innerHTML = localStorage.getItem("totalNum");
    document.querySelector("#calcHistoryText").innerHTML = "Subtracted";
    lastOperator = 2;
});
const clickMultiply = document.querySelector("#buttonMultiply").addEventListener("click", function() {
    total *= activeNum;
    activeNum = 0;
    localStorage.setItem("totalNum", total);
    calcScreen.innerHTML = localStorage.getItem("totalNum");
    document.querySelector("#calcHistoryText").innerHTML = "Multiplied";
    lastOperator = 3;
});
const clickDivide = document.querySelector("#buttonDivide").addEventListener("click", function() {
    total /= activeNum;
    activeNum = 0;
    localStorage.setItem("totalNum", total);
    calcScreen.innerHTML = localStorage.getItem("totalNum");
    document.querySelector("#calcHistoryText").innerHTML = "Divided";
    lastOperator = 4;
});

const clickEqual = document.querySelector("#buttonEqual").addEventListener("click", function() {
    if (lastOperator === 1) {
        total += previousNum;
    } else if (lastOperator === 2) {
        total -= previousNum;
    } else if (lastOperator === 3) {
        total *= previousNum;
    } else if (lastOperator === 4) {
        total /= previousNum;
    }
    activeNum = total;
    calcScreen.innerHTML = total;
    localStorage.setItem("totalNum", total);
});
const clickClear = document.querySelector("#buttonClear").addEventListener("click", function() {
    calcScreen.innerHTML = "0";
    localStorage.setItem("totalNum", 0);
    activeNum = 0;
    activeString = "";
    previousNum = 0;
    total = 0;
    lastOperator = 0;
});