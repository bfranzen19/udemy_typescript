const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
// ! tells ts that this will never be null
// as HTMLInputElement is type casting
const input2 = document.getElementById("num2")! as HTMLInputElement;

// :number tells ts that this input will always be type number
function add(num1:number, num2:number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));   // adding + converts it to a number
  return add(+input1.value, +input2.value);
});
