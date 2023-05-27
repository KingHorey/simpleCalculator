const body = document.body;
const digits = document.getElementsByClassName("nums");
const digitsArray = Array.from(digits);
const outputValue = body.querySelector("#output p");
const inputValue = body.querySelector("#input p");
const equals = body.querySelector("#equals");

let dig1, dig2, result, sign, num, inputTwo;


(() => {
  digitsArray.forEach(element => element.addEventListener("click", (event) => {
    if (event.target.classList.contains("digits"))
    {
      if (sign === undefined) {
        if (dig1 === undefined) {
          dig1 = event.target.textContent;
        }
        else {
          dig1 += event.target.textContent;
        }
        inputValue.textContent = dig1;
      }
      else if (sign !== undefined && dig1 !== undefined) {
        if (dig2 === undefined) {
          dig2 = event.target.textContent;
          inputValue.textContent += dig2;
        }
        else {
          dig2 += event.target.textContent;
          inputValue.textContent += event.target.textContent;
        }
    }
    }
    else if (event.target.classList.contains("sign")) {
      if (dig1 !== undefined && dig2 !== undefined) {
        dig1 = Number(dig1);
        dig2 = Number(dig2);
        result = operate(dig1, sign, dig2);
        outputValue.textContent = result;
        dig1 = String(result);
      }
      else {
        inputValue.textContent += event.target.textContent;
        sign = event.target.textContent;
      }
    }
    if (event.target.classList.contains("clear")) {
      dig1.textContent = "";
      dig2.textContent = "";
      sign.textContent = "";
      inputValue.textContent = "";
      outputValue.textContent = 0;
    }
  }))
})();


  function factorial(num1) {
    if (num1 == 0 || num1 == 1) {
      return 1;
    }
    else {
      return (num1 * factorial(num1 - 1));
      }
    };


    function exponent(num, num2=0) {
      if (num2 === 0 || num2 === 1)
        return (num);
      else {
        return (num * exponent(num, num2 - 1))
        }
      };


function operate(num1, sign, num2) {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    case '!':
      return factorial(num1);
    case '^':
      return exponent(num1, num2);
    default:
      return NaN;
  }
};

equals.addEventListener("click", () => {
  const [num1, num2] = outputValue.textContent.split(/[\*\+\^\/\%\!\-]/g);
  const value1 = Number(dig1);
  const value2 = Number(dig2);
  inputValue.textContent = outputValue.textContent;
  const answer = operate(value1, sign, value2);
  outputValue.textContent =  answer;
});