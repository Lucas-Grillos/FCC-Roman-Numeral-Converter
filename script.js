const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const decimals = [
    1000, 
    900, 
    500, 
    400, 
    100, 
    90, 
    50, 
    40, 
    10, 
    9, 
    5, 
    4, 
    1
];

const numeralObj = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I"
};

const showError = (error) => {
    output.textContent = error;
    output.classList.toggle("error");
    output.classList.toggle("display");
};

const convertLoop = (number) => {
    let romanArr = []
    let decis = [...decimals]
    while (decis.length > 0) {
        if (decis[0] <= number) {
            romanArr.push(numeralObj[decis[0]]);
            number-=decis[0];
        } else {
            decis.shift();
        }
    }
    return romanArr.join("");
};

const showMessage = (number) => {
    let romanNumeral = convertLoop(number);
};

const checkValidInput = (event) => {
    event.preventDefault();
    if ([...output.classList].includes("error")) {
        console.log("Error!");
    }
    if ([...output.classList].includes("display")) {
        console.log("Display!");
    }

    let checkNum = number.value;

    if (!checkNum) {
        showError("Please enter a valid number");
        console.log(checkNum);
    } else if (Number(checkNum) <= 0) {
        console.log(checkNum);
        showError("Please enter a number greater than or equal to 1")
    } else if (Number(checkNum) >= 4000) {
        showError("Please enter a number less than or equal to 3999")
        console.log(checkNum);  
    } else {
        showMessage(Number(checkNum));
    }

};

convertBtn.addEventListener("click", checkValidInput); 