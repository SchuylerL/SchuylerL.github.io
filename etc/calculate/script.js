function calculateAndCopy() {
  // Get the value from the input field
  let inputNumber = document.getElementById('inputNumber').value;

  // Check if input is a valid number
  if (isNaN(inputNumber) || inputNumber === '') {
    alert('Please enter a valid number');
    return;
  }

  // Calculate 80% of the number
  let result = (inputNumber * 0.8).toFixed(2);

  // Display the result
  document.getElementById(
    'result'
  ).innerText = `80% of ${inputNumber} is ${result}`;

  // Copy the result to the clipboard
  copyToClipboard(result);
}

function copyToClipboard(text) {
  // Create a temporary textarea element to hold the text
  let tempTextarea = document.createElement('textarea');
  tempTextarea.value = text;

  // Append the textarea to the body (required for the copy command)
  document.body.appendChild(tempTextarea);

  // Select the text
  tempTextarea.select();

  // Execute the copy command
  document.execCommand('copy');

  // Remove the temporary textarea
  document.body.removeChild(tempTextarea);

  // Alert the user that the text has been copied
  //   alert('Result copied to clipboard: ' + text);
}
