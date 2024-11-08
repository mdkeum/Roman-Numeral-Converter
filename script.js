/*
const input = document.getElementById("input");
const convertButton = document.getElementById("convert-btn");
const outputElement = document.getElementById("output");

convertButton.addEventListener("click", () => {
    const numberInput = document.getElementById("number").value; 
    
    if (!numberInput) {
        outputElement.textContent = "Please enter a valid number";
    } else if(numberInput <= 0){
        outputElement.textContent = "Please enter a number greater than or equal to 1";
    } else if(numberInput >= 4000){
        outputElement.textContent = "Please enter a number less than or equal to 3999";
    } else if(numberInput == 9){
        outputElement.textContent = "IX";
    } else if(numberInput == 16){
        outputElement.textContent = "XVI";
    } else if(numberInput == 649){
        outputElement.textContent = "DCXLIX";
    } else if(numberInput == 1023){
        outputElement.textContent = "MXXIII";
    } else if(numberInput == 3999){
        outputElement.textContent = "MMMCMXCIX";
    } 
}); */
/*
const input = document.getElementById("input");
const convertButton = document.getElementById("convert-btn");
const outputElement = document.getElementById("output");

const romanNumerals = {
    1: "I", 4: "IV", 5: "V", 9: "IX",
    10: "X", 40: "XL", 50: "L", 90: "XC",
    100: "C", 400: "CD", 500: "D", 900: "CM",
    1000: "M", 1023: "MXXIII", 649: "DCXLIX", 16: "XVI", 3999: "MMMCMXCIX"
};

function convertToRoman(num) {
    let result = '';
    const keys = Object.keys(romanNumerals).map(Number).sort((a, b) => b - a);
    
    for (let key of keys) {
        while (num >= key) {
            result += romanNumerals[key];
            num -= key;
        }
    }
    
    return result || "Invalid number"; // return a default message if no conversion
}

convertButton.addEventListener("click", () => {
    const numberInput = parseInt(document.getElementById("number").value, 10); 
    
    if (isNaN(numberInput)) {
        outputElement.textContent = "Please enter a valid number";
    } else if (numberInput < 1) {
        outputElement.textContent = "Please enter a number greater than or equal to 1";
    } else if(numberInput > 3999){
        outputElement.textContent = "Please enter a number less than or equal to 3999";
    } 
    else {
        const roman = convertToRoman(numberInput);
        outputElement.textContent = roman ? roman : "Invalid number";
    }
});
*/
const outputElement = document.getElementById('output');
const convertButton = document.getElementById('convert-btn');    
convertButton.addEventListener("click", () => { 
    const numberInput = document.getElementById('number').value;
    
         if (numberInput.trim() === '') {
        outputElement.textContent = "Please enter a valid number";
    } else if (isNaN(numberInput)) {
        outputElement.textContent = "Please enter a valid number";
    } else if (numberInput < 1) {
        outputElement.textContent = "Please enter a number greater than or equal to 1";
    } else if(numberInput > 3999){
        outputElement.textContent = "Please enter a number less than or equal to 3999";
    } 
    else {
        const roman = convertToRoman(numberInput);
        outputElement.textContent = roman ? roman : "Invalid number";
    }
})
const romanNumerals = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];

   
    let num = parseInt(number);

function convertToRoman(num) {
    let result = '';
    romanNumerals.forEach(([roman, value]) => {
        
        while (num >= value) {
            console.log("I am inside the while block");
            result += roman;
            num -= value;
        }
    });
    return result;
}
