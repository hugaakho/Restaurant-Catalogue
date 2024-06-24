import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <h2 class="resto__title">${resto.name}</h2>
  <img class="resto__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
  <div class="resto__info">
  <h3>Information</h3>
    <h4>Kota</h4>
    <p>${resto.city}</p>
    <h4>Address</h4>
    <p>${resto.address}</p>
    <h4>⭐️Rating</h4>
    <p>${resto.rating}</p>
  </div>
  <div class="resto__overview">
    <h3>Overview</h3>
    <p>${resto.description}</p>
  </div>

      <h4>Menu Makanan</h4>
    <ol>
      ${resto.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
    </ol>
    <h4>Menu Minuman</h4>
    <ol>
      ${resto.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
    </ol>
    <h4>Review Customer</h4>
    <ol>
      ${resto.customerReviews.map((review) => `
    <li>
          <p><strong> nama reviewer : ${review.name}</strong>:</p>
          <p>Pesan review : ${review.review}</p>
          <p>tanngal review : ${review.date}</p>
        </li>`).join('')}
    </ol>
    
`;

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__poster lazyload" alt="${resto.name || '-'}"
           data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${resto.rating || '-'}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3 class="resto__title"><a href="/#/detail/${resto.id}">${resto.name || '-'}</a></h3>
      <p>${resto.city || '-'}</p>
    </div>
  </div>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this Resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this Resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
