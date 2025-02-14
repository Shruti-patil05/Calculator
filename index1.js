const resultField = document.getElementById("result");

function appendValue(value) {
  resultField.value += value;
}

function clearResult() {
  resultField.value = "";
}

function deleteDigit() {
  resultField.value = resultField.value.slice(0, -1);
}

function calculateResult() {
  try {
    resultField.value = eval(resultField.value);
  } catch (error) {
    resultField.value = "Error";
  }
}