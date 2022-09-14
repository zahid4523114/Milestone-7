let getValueFromInput = (id) => {
  let getId = document.getElementById(id);
  let getValue = getId.value;
  return getValue;
};

let addItem = () => {
  document.getElementById("add-item").addEventListener("click", function () {
    let setId = getValueFromInput("get-data");
    setItemToLocalStorage(setId);
    //   displayValue(setId);
    //   console.log(setId);
  });
};
addItem();

let displayValue = (value) => {
  let listContainer = document.getElementById("show-item");
  let li = document.createElement("li");
  li.innerText = value;
  listContainer.appendChild(li);
};

let setItemToLocalStorage = (value) => {
  localStorage.setItem("number", value);
  let getValue = localStorage.getItem("number");
  console.log(getValue);
  displayValue(getValue);
};
