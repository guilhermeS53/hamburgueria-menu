const list = document.querySelector("ul");
list.innerHTML = "";

////////////////////////////////

const buttonShowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".map-all");
const buttonTotalAll = document.querySelector(".total-all");
const buttonShowVegan = document.querySelector(".show-vegan");

////////////////////////////////

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

const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);

////////////////////////////////

buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMapAll.addEventListener("click", mapAll);
buttonTotalAll.addEventListener("click", () => {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);
  list.innerHTML = `
    <li>
      <p>O valor total dos itens é de R$ ${totalValue.toFixed(2)}</p>
    </li>
  `;
});
buttonShowVegan.addEventListener("click", () =>
  showAll(menuOptions.filter((product) => product.vegan))
);
