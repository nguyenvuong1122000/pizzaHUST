const urlAPI = 'http://127.0.0.1:8000/piza';
function start() {
  getProductList(renderProductList);
}
function getProductList(callback) {
  fetch(urlAPI)
    .then(function (respone) {
      return respone.json();
    })
    .then(callback);
}
function renderProductList(productList) {
  var productItemElement =
    document.querySelector('.product-item');
  var mappingList = productList.map(function (productItem) {
    return `
    <div class="product-item col-lg-4">
    <img
      src="${productItem.image}"
      alt=""
      class="product-item__img"
    />
    <div class="product-item__header">
      ${productItem.name}
    </div>
    <div class="product-item___content">
      <div
        class="product-item__content__info"
      >
        <div
          class="product-item__info__start"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="
              product-item__info__start--icon-color
              product-item__info__start--icon
              feather feather-star
            "
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            ></polygon>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="
              product-item__info__start--icon-color
              product-item__info__start--icon
              feather feather-star
            "
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            ></polygon>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="
              product-item__info__start--icon-color
              product-item__info__start--icon
              feather feather-star
            "
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            ></polygon>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="
              product-item__info__start--icon
              feather feather-star
            "
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            ></polygon>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="
              product-item__info__start--icon
              feather feather-star
            "
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            ></polygon>
          </svg>
        </div>
        <div
          class="product-item__info__price"
        >
          ${productItem.cost}<span
            class="
              product-item__price-current
            "
            >đ</span
          >
        </div>
      </div>
      <div
        class="product-item__content__add"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-plus"
        >
          <line
            x1="12"
            y1="5"
            x2="12"
            y2="19"
          ></line>
          <line
            x1="5"
            y1="12"
            x2="19"
            y2="12"
          ></line>
        </svg>
      </div>
    </div>
  </div>
           `;
  });
  var content = mappingList.join('');
  productItemElement.innerHTML = content;
}
start();
