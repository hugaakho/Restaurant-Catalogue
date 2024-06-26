import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import FavoriteRestoView from './liked-restos/favorite-resto-view';
import FavoriteRestoShowPresenter from './liked-restos/favorite-resto-show-presenter';
import FavoriteRestoSearchPresenter from './liked-restos/favorite-resto-search-presenter';

const view = new FavoriteRestoView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    // eslint-disable-next-line no-new
    new FavoriteRestoShowPresenter({ view, favoriteRestos: FavoriteRestoIdb });
    // eslint-disable-next-line no-new
    new FavoriteRestoSearchPresenter({ view, favoriteRestos: FavoriteRestoIdb });
  },
};

export default Like;
