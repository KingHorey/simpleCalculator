const body = document.body;
const digits = document.getElementsByClassName("nums");
const digitsArray = Array.from(digits);
const outputValue = body.querySelector("#output p");
const inputValue = body.querySelector("#input p");
const equals = body.querySelector("#equals");

let dig1, dig2, result, sign;

/* arrow IIFE function to get the digits and the sign */
(() => {
  digitsArray.forEach(element => element.addEventListener("click", (event) => {
    if (event.target.classList.contains("digits"))
    {
      if (sign === undefined)
      {
        if (dig1 === undefined) {
          dig1 = event.target.textContent;
        }
        else {
          dig1 += event.target.textContent;
        }
        inputValue.textContent = dig1;
      }
      else if (sign !== undefined && dig1 !== undefined)
      {
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
        sign = String(event.target.textContent);
        dig2 = undefined;
        inputValue.textContent += event.target.textContent
      }
      else {
        inputValue.textContent += event.target.textContent;
        sign = String(event.target.textContent);
        result = operate(dig1, sign, dig2);
      }
    }
    if (event.target.classList.contains("clear")) {
      dig1 = undefined;
      dig2 = undefined;
      sign = undefined;
      inputValue.textContent = "";
      outputValue.textContent = 0;
    }
    if (event.target.classList.contains("delete")) {
      inputValue.textContent = inputValue.textContent.slice(0, -1);
      [dig1, dig2] = inputValue.textContent.split(/[\*\+\^\/\%\!\-]/g);
    }
    if (event.target.classList.contains("neg")) {
      if (dig1 === undefined)
      {
        dig1 = "-";
        inputValue.textContent = "-"
      }
      else {
        dig2 = "-";
        inputValue.textContent += "-";
      };
    }
  }))
})();


function factorial(num1)
{
  if (num1 == 0 || num1 == 1) {
    return 1;
  }
  else {
    return (num1 * factorial(num1 - 1));
    }
};


function exponent(num, num2=0)
{
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
      {
        if (num2 === 0)
          return(NaN);
        else
          return num1 / num2;
      }
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
  const answer = operate(value1, sign, value2);
  outputValue.textContent =  answer;
});