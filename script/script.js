const modalFunc = () => {
  const modal = document.querySelector(".card-modal__overlay");
  const cartBtn = document.querySelector("#cart-button");

  const openModal = () => {
    modal.classList.add("open");
  };

  const closeModal = () => {
    modal.classList.remove("open");
  };

  cartBtn.addEventListener("click", () => {
    openModal();
  });

  modal.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("card-modal__overlay") ||
      event.target.closest(".card-modal__header--close")
    ) {
      closeModal();
    }
  });
};

const restsFunc = () => {
  const container = document.querySelector("#rests-container");

  const restArray = [
    {
      id: 0,
      title: "Пицца плюс",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "image1.jpg",
    },
  ];
  const loading = () => {
    container.innerHTML =
      '<p style="width: 100%; text-align: center;">Загрузка</p>';
  };

  const randerRests = (array) => {
    container.innerHTML = "";

    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
        <a href="./goods.html?id=${card.id}" class="products-card">
                <div class="products-card__image">
                  <img src="./images/rests/${card.image}" alt="${card.image}" />
                </div>
                <div class="products-card__description">
                  <div class="products-card__description--row">
                    <h4 class="products-card__description--title">
                      ${card.title}
                    </h4>
                    <div class="products-card__description--badge">${card.time} мин</div>
                  </div>
                  <div class="products-card__description--row">
                    <div class="products-card__description-info">
                      <div class="products-card__description-info--rating">
                        <img src="./images/icons/star.svg" alt="" />
                        ${card.rating}
                      </div>
                      <div class="products-card__description-info--price">
                        От ${card.price} ₽
                      </div>
                      <div class="products-card__description-info--group">
                        ${card.type}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
        `
      );
    });
  };

  if (container) {
    loading();

    setTimeout(() => {
      randerRests(restArray);
    }, 1000);
  }
};

modalFunc();
restsFunc();


/*
Если хочется ещё развлечься — сделайте усложнённое:

—Реализовать логический блок goodsFunc в котором повторить логику из restsFunc, но для страницы goods.html
— Карточки товаров на странице goods.html должны выводиться из одного и того же массива для каждого ресторана
— Проверить на наличие ошибок в консоли на обеих страничках
*/