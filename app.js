var btnResult = document.querySelector("#btn-result")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

function clickHandler() {
  var inputText = txtInput.value;

  let resultText = "";

  if (inputText >= 18) {
    resultText= "you are eligible to apply for a driving license."
   
  } else {
    let ans = 18 - inputText
    resultText = "you are not yet eligible to apply for a driving license. " + ans +  " years are reamaning"

  }

  outputDiv.innerText = resultText;

}

btnResult.addEventListener("click", clickHandler)