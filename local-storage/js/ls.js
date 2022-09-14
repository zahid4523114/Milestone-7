//common function
let getAmounts = (id) => {
  let products = document.getElementById(id);
  let getProductValue = products.value;
  products.value = "";
  return getProductValue;
};

let addProducts = () => {
  let product = getAmounts("get-product");
  let quantity = getAmounts("get-quantity");
  //show products
  let displayItem = document.getElementById("show-item");
  let li = document.createElement("li");
  li.innerText = `${product} - ${quantity}`;
  displayItem.appendChild(li);
  //advanced
  setItemsToLocalStorage(product, quantity);
};
//get item from local storage
let getItemsFromLocalStorage = () => {
  let savedCart = localStorage.getItem("cart");
  let cart = {};
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
  return cart;
};

//set item to local storage
let setItemsToLocalStorage = (product, quantity) => {
  let cart = getItemsFromLocalStorage();
  console.log(cart);
  //add product to the object as property
  console.log(product);
  cart[product] = quantity;
  let stringifiedCart = JSON.stringify(cart);
  //set item to local storage
  localStorage.setItem("cart", stringifiedCart);
};

//display item to the ui
let displayItem = () => {
  let cart = getItemsFromLocalStorage();
  for (product in cart) {
    let quantity = cart[product];
    console.log(quantity);
    let displayItem = document.getElementById("show-item");
    let li = document.createElement("li");
    li.innerText = `${product} - ${quantity}`;
    displayItem.appendChild(li);
  }
};
displayItem();

//remove
let removeProducts = () => {
  let displayItem = document.getElementById("show-item");
  displayItem.innerHTML = "";
  localStorage.clear();
};
