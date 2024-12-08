const list = document.querySelector("ul");
list.innerHTML = "";

const buttonShowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".map-all");

const showAll = (productsArray) => {
  let myLi = "";
  productsArray.forEach((product) => {
    myLi += `
      <li>
        <img src=${product.src}>
        <p>${product.name}</p>
        <p class="item-price">R$ ${product.price.toFixed(2)}</p>
        <div class="vegan">
        <p><strong>${
          product.vegan ? "Opção Vegana" : "Opção Não Vegana"
        }</strong></p></div>
      </li>
    `;
  });

  list.innerHTML = myLi;
};

const mapAll = () => {
  const newPrices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }));
  showAll(newPrices);
};

buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMapAll.addEventListener("click", mapAll);
