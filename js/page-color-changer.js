// selected red, green and blue tag

const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");

//selected whole html
const html = document.querySelector("html");

//selecting the inistial value  of color
let redValue = red.value;
let greenValue = green.value;
let blueValue = blue.value;

const getValue = (e) => {
  e.preventDefault();

  console.log(e);
};

// changing html background color
html.style.backgroundColor = `rgb(${redValue}, ${blueValue}, ${greenValue})`;

//function and eventlistener to get the color value and changing the background color
red.addEventListener("input", function () {
  redValue = red.value;
  html.style.backgroundColor = `rgb(${redValue}, ${blueValue}, ${greenValue})`;
});
blue.addEventListener("input", function () {
  blueValue = blue.value;
  html.style.backgroundColor = `rgb(${redValue}, ${blueValue}, ${greenValue})`;
});
green.addEventListener("input", function () {
  greenValue = green.value;
  html.style.backgroundColor = `rgb(${redValue}, ${blueValue}, ${greenValue})`;
});
