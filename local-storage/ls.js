//adding data to ls
document.getElementById("add-item").addEventListener("click", function () {
  let getValue = document.getElementById("get-input");
  let value = getValue.value;
  getValue.value = "";
  let displayItem = document.getElementById("show-item");
  let li = document.createElement("li");
  li.innerText = value;
  displayItem.appendChild(li);
  localStorage.setItem("userInput", value);
});
//removing dat from ls
document.getElementById("remove-item").addEventListener("click", function () {
  let displayItem = document.getElementById("show-item");
  displayItem.innerHTML = "";
  localStorage.removeItem("userInput");
});
