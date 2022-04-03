function calSubstract() {
  const number1 = document.querySelector("#number1");
  const number2 = document.querySelector("#number2");
  const result = document.querySelector("#result");
  if (number1 && number2 && result) {
    result.innerHTML = parseInt(number1.value) - parseInt(number2.value);
  }
}

function changeStyle(number) {
  const introductionElement = document.querySelector(".introduction");
  const h1Element = introductionElement.querySelector("h1");
  const descElement = introductionElement.querySelector("#description");
  switch (number) {
    case 1:
      if (introductionElement) {
        if (h1Element) {
          h1Element.style.color = "red";
          h1Element.style.fontSize = "20px";
        }
        if (descElement) {
          descElement.style.color = "red";
          descElement.style.fontSize = "15px";
        }
      }
      break;

    case 2:
      if (introductionElement) {
        if (h1Element) {
          h1Element.style.border = "1px green solid";
        }
        if (descElement) {
          descElement.style.border = "1px green solid";
        }
      }
      break;
    case 3:
      if (introductionElement) {
        if (h1Element) {
          h1Element.style.backgroundColor = "brown";
        }
        if (descElement) {
          descElement.style.backgroundColor = "brown";
        }
      }
      break;
    case 4:
      if (introductionElement) {
        if (h1Element) {
          h1Element.style.padding = "15px";
        }
        if (descElement) {
          descElement.style.padding = "15px";
        }
      }
      break;
    case 5:
      if (introductionElement) {
        if (h1Element) {
          h1Element.style.margin = "20px";
        }
        if (descElement) {
          descElement.style.margin = "20px";
        }
      }
      break;
    default:
      if (introductionElement) {
        if (h1Element) {
          h1Element.style.border = "none";
          h1Element.style.color = "black";
          h1Element.style.padding = "0";
          h1Element.style.margin = "0";
          h1Element.style.backgroundColor = "white";
        }
        if (descElement) {
          descElement.style.border = "none";
          descElement.style.color = "black";
          descElement.style.padding = "0";
          descElement.style.margin = "0";
          descElement.style.backgroundColor = "white";
        }
      }
      break;
  }
}

function validate() {
  const loginElement = document.querySelector(".login");
  const userNameElement = loginElement.querySelector("#username");
  const passWordElement = loginElement.querySelector("#password");
  const warningElement = loginElement.querySelector("#warning");

  if (loginElement) {
    if (userNameElement && passWordElement) {
      if (userNameElement.value == "" || passWordElement.value == "") {
        warningElement.textContent = "Please input UserName and Password";
        warningElement.style.color = "red";
      } else {
        warningElement.innerText = "Login Success";
        warningElement.style.color = "green";
      }
    }
  }
}
