// Write your Pizza Builder JavaScript in this file.

// Constants
var basePrice = 10;
var ingredients = {
  pepperonni: { name: "Pepperonni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
};

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

function renderPrice() {
  // Hide the Pizza ingredients by default
  document.querySelector(".price ul").innerHTML = "";
  document.querySelector(".price strong").innerHTML = "";

  let totalPrice = 10;
  for (var item in ingredients) {
    if (state[item] === true) {
      let listItem = document.createElement("li");
      listItem.innerText = `$${ingredients[item].price} ${ingredients[item].name}`;
      document.querySelector(".price ul").appendChild(listItem);
      totalPrice += ingredients[item].price;
    }
  }
  return (totalPrice += document.querySelector(".price strong").innerHTML = `$${totalPrice}`);
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperonni() {
  document.querySelectorAll(".pep").forEach(function($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    } else {
      $pep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach(function($mushroom) {
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    } else {
      $mushroom.style.visibility = "hidden";
    }
  });
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach(function($greenPeppers) {
    if (state.greenPeppers) {
      $greenPeppers.style.visibility = "visible";
    } else {
      $greenPeppers.style.visibility = "hidden";
    }
  });
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  document.querySelectorAll(".sauce").forEach(function($whiteSauce) {
    if (state.whiteSauce) {
      $whiteSauce.classList.add("sauce-white");
    } else {
      $whiteSauce.classList.remove("sauce-white");
    }
  });
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  document.querySelectorAll(".crust").forEach(function($glutenFreeCrust) {
    if (state.glutenFreeCrust) {
      $glutenFreeCrust.classList.add("crust-gluten-free");
    } else {
      $glutenFreeCrust.classList.remove("crust-gluten-free");
    }
  });
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}
document.querySelectorAll(".btn").forEach(function(button) {
  button.addEventListener("click", evt => {
    evt.target.classList.toggle("active");
  });
});

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = function() {
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").onclick = function() {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
