const list = document.querySelector("ul");
list.innerHTML = "";  
const buttonShowAll = document.querySelector(".show-all");

const showAll = () => {
  let myLi = "";
  menuOptions.forEach((product) => {
    myLi += `
      <li>
        <img src=${product.src}>
        <p>${product.name}</p>
        <p class="item-price">R$ ${product.price.toFixed(2)}</p>
        <div class="vegan">${
          product.vegan ? "Opção Vegana" : "Opção Não Vegana"
        }</div>
      </li>
    `;
  });

  list.innerHTML = myLi;
};

buttonShowAll.addEventListener("click", showAll);
