const body = document.body;
const digits = document.getElementsByClassName("nums");
const digitsArray = Array.from(digits);
const outputValue = body.querySelector("#output p");
const inputValue = body.querySelector("#input p");
const equals = body.querySelector("#equals");


(function () {
  // function to listen to events and get value


    let sign;
    digitsArray.forEach(element => { element.addEventListener("click", (event) => {
      const value = event.target.textContent;
      if (event.target.classList.contains("digits")) {
        if (outputValue.innerText === "0"){
          outputValue.innerText = value;
        }
        else {
        outputValue.innerText += value;
        }
        } else if (event.target.classList.contains("sign")) {
            sign = value;
            outputValue.innerText += value;
          } else if (event.target.classList.contains("clear")) {
            outputValue.innerText = 0;
            inputValue.innerText = ""
          };
        }
    )});
    
    if (outputValue.textContent.length === 3) {
      const [num1, num2] = outputValue.textContent.split(/[\*\+\^\/\%\!\-]/g);
      const value1 = Number(num1);
      const value2 = Number(num2);
      inputValue.textContent = outputValue.textContent;
      outputValue.textContent = operate(value1, sign, value2);
    }

    equals.addEventListener("click", () => {
      const [num1, num2] = outputValue.textContent.split(/[\*\+\^\/\%\!\-]/g);
      const value1 = Number(num1);
      const value2 = Number(num2);
      inputValue.textContent = outputValue.textContent;
      outputValue.textContent = operate(value1, sign, value2);
    });
    
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
})();
