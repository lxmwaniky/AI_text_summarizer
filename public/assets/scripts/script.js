const textArea = document.getElementById("text_to_summarize");
const submitButton = document.getElementById("submit-button");
const summarizedTextArea = document.getElementById("summary");







textArea.addEventListener("input", verifyTextLength);
submitButton.addEventListener("click", submitData);