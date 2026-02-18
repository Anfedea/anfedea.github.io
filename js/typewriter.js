const text1 = " Hi there! ";
const text2Green = "News! ";
const text2Normal = "Next 22nd of April the UPAC group organises the COSMO-MASTER Workshop on Spin 2 Gravity, check our webpage for more info! ";
const consoleElement = document.getElementById("console");
let i = 0; // Counter for the first line
let j = 0; // Counter for the green part of the second line
let k = 0; // Counter for the normal part of the second line
let isNormalStarted = false; // Track if normal text has started

function typeWriterFirstLine() {
  if (i < text1.length) {
    consoleElement.innerHTML += text1.charAt(i);
    i++;
    setTimeout(typeWriterFirstLine, 100); // Adjust typing speed here
  } else {
    consoleElement.innerHTML += `<br>`; // Break line after the first text
    setTimeout(typeWriterSecondLineGreen, 500); // Delay before starting the second line
  }
}

function typeWriterSecondLineGreen() {
  if (j < text2Green.length) {
    // Add the entire green text only once
    if (j === 0) {
      consoleElement.innerHTML += `<span class="second-line green" style="padding-left: 1.5em;">${text2Green}</span>`;
    }
    j = text2Green.length; // Skip the rest since it's already added
    setTimeout(typeWriterSecondLineNormal, 200); // Proceed to the normal text
  }
}

function typeWriterSecondLineNormal() {
  if (!isNormalStarted) {
    // Start the normal text with indentation
    consoleElement.innerHTML += `<span class="second-line normal">`;
    isNormalStarted = true;
  }

  if (k < text2Normal.length) {
    // Add characters to the normal text
    const normalElement = document.querySelector(".second-line.normal");
    normalElement.innerHTML += text2Normal.charAt(k);
    k++;
    setTimeout(typeWriterSecondLineNormal, 25);
  } else {
    consoleElement.innerHTML += "</span><span class='blinking-cursor'></span>"; // Close span and add blinking cursor
  }

}

window.onload = typeWriterFirstLine;