const btn = document.querySelector(".btn");
const body = document.body;
const hexCodeContext = document.querySelector("#hex-code");
const h1 = document.querySelector(".hex-colors > h1");
let hexCode;

function changeColorH1() {
  const min = 0;
  const max = 255;
  const rate1 = Math.floor(Math.random() * (max - min) + min);
  const rate2 = Math.floor(Math.random() * (max - min) + min);
  const rate3 = Math.floor(Math.random() * (max - min) + min);

  h1.style.color = `rgb(${rate1},${rate2},${rate3})`;
}

setInterval(changeColorH1, 1000);

function changeColor() {
  //prettier-ignore
  const hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];
  hexCode = "";
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hex_numbers.length);
    hexCode += hex_numbers[index];
  }
  console.log(hexCode);
  body.style.backgroundColor = `#${hexCode}`;
  hexCodeContext.textContent = hexCode;
}

btn.addEventListener("click", changeColor);
