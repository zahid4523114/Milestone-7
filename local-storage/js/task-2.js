let countNumber = () => {
  let getNum = document.getElementById("number");
  let text = getNum.innerText;
  let convertToNumber = Number(text);
  let sum = convertToNumber + 1;
  getNum.innerText = sum;
  localStorage.setItem("num", sum);
};
countNumber();
