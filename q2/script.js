const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");
const NUMBER_PATTERN = /^[+-]?(\d+(\.\d*)?|\.\d+)$/;

function checkInput() {
  const rawValue = userInput.value.trim();
  let message;

  if (rawValue === "" || !NUMBER_PATTERN.test(rawValue)) {
    message = "Please enter a valid number!";
  } else {
    const number = Number(rawValue);

    if (number < 10) {
      message = "The number is lower than 10";
    } else if (number > 10) {
      message = "The number is higher than 10";
    } else {
      message = "The number is equal to 10";
    }
  }

  result.textContent = message;
}
checkBtn.addEventListener("click", checkInput);
