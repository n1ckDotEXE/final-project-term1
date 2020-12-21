window.onload = function() {
    localStorage.setItem("totalNum", 0);
}

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

    localStorage.setItem("totalNum", total);
    document.querySelector("#calcHistoryText").innerHTML = "9";
});
const clickSubtract = document.querySelector("#buttonSubtract").addEventListener("click", function() {
    total -= activeNum;
    activeString = activeNum;
});
const clickMultiply = document.querySelector("#buttonMultiply").addEventListener("click", function() {
    total *= activeNum;
    activeString = activeNum;
});
const clickDivide = document.querySelector("#buttonDivide").addEventListener("click", function() {
    total /= activeNum;
    activeString = activeNum;
});

const clickEqual = document.querySelector("#buttonEqual").addEventListener("click", function() {
    activeNum = total;
    document.querySelector("#calcScreenText").innerHTML = total;
});
const clickClear = document.querySelector("#buttonClear").addEventListener("click", function() {
    document.querySelector("#calcScreenText").innerHTML = "0";
    localStorage.setItem("totalNum", 0);
    activeNum = 0;
    activeString = "";
    total = 0;
});

let total = 0;
let activeNum = 0;
let previousNum = 0;
let activeString = "";
