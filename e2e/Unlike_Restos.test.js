const assert = require('assert');

Feature('UnLiking Restos');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked Restos', ({ I }) => {
  I.seeElement('#query');

  // I.seeElement('.query'); --> menyebabkan error

  I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');
});

Scenario('liking one resto kemudian delete yang di like', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');

  I.amOnPage('/');

  // pause();

  I.seeElement('.resto__title a');
  const firstResto = locate('.resto__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.resto-item');
  const likedRestoTitle = await I.grabTextFrom('.resto__title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  I.click(locate('.resto__title a').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');
});

// Scenario('searching movies', async ({ I }) => {
//   I.see('Tidak ada resto untuk ditampilkan', '.movie-item__not__found');

//   I.amOnPage('/');

//   I.seeElement('.movie__title a');

//   const titles = [];

//   // eslint-disable-next-line no-plusplus
//   for (let i = 1; i <= 3; i++) {
//     I.click(locate('.movie__title a').at(i));

//     I.seeElement('#likeButton');
//     I.click('#likeButton');

//     // eslint-disable-next-line no-await-in-loop
//     titles.push(await I.grabTextFrom('.movie__title'));

//     I.amOnPage('/');
//   }

//   I.amOnPage('/#/like');
//   I.seeElement('#query');

//   const visibleLikedMovies = await I.grabNumberOfVisibleElements('.movie-item');
//   assert.strictEqual(titles.length, visibleLikedMovies);

//   const searchQuery = titles[1].substring(1, 3);

//   I.fillField('#query', searchQuery);
//   I.pressKey('Enter');

//   // mendapatkan daftar film yang sesuai dengan searchQuery
//   const matchingMovies = titles.filter((title) => title.indexOf(searchQuery) !== -1);
//   const visibleSearchedLikedMovies = await I.grabNumberOfVisibleElements('.movie-item');

//   assert.strictEqual(matchingMovies.length, visibleSearchedLikedMovies);

//   // eslint-disable-next-line no-plusplus
//   for (let i = 0; i < matchingMovies.length; i++) {
//     // eslint-disable-next-line no-await-in-loop
//     const visibleTitle = await I.grabTextFrom(locate('.movie__title').at(i + 1));

//     assert.strictEqual(matchingMovies[i], visibleTitle);
//   }
// });
