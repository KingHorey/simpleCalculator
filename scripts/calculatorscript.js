const body = document.body;
const digits = document.getElementsByClassName("nums");
const digitsArray = Array.from(digits);
const outputValue = body.querySelector("#output p");
const inputValue = body.querySelector("#input p");
const equals = body.querySelector("#equals");


let dig1, dig2, sign, store2;

getDigits();


function getDigits() {

  if (dig1 === undefined || dig1 === null) {
    digitsArray.forEach(element => {
      element.addEventListener("click", (event) => {
      const value = event.target.textContent;
      if (event.target.classList.contains("nums")) {
        if (outputValue.innerText == 0) {
          outputValue.innerText = value;
          getSign();
          const [num, sgn] = outputValue.innerText.split(/[\*\+\^\/\%\!\-]/g)
          dig1 = Number(num);
          // getSecondDigit();
        }
        else {
          outputValue.innerText += value;
          getSign();
          const [num, sgn] = outputValue.innerText.split(/[\*\+\^\/\%\!\-]/g)
          dig1 = Number(num);
          // getSecondDigit()
        }
      };
    })
  })
  };
  // getSecondDigit()
};

function getSecondDigit ()
{
  console.log(dig1);
  if (dig1 !== undefined && (dig2 === undefined || dig2 === null)) {
    digitsArray.forEach(element => {
      element.addEventListener("click", (event) => {
      const value = event.target.textContent;
      if (event.target.classList.contains("nums")) {
          store2 = value;
          outputValue.innerText += value;
          dig2 = Number(store2);
        }
      })
    })
  }

}

function getSign() {
  digitsArray.forEach(element => { element.addEventListener("click", (e) => {
    if (e.target.classList.contains("sign")) {
      sign = e.target.textContent;
      };
    })
  });
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


// splitTokens()