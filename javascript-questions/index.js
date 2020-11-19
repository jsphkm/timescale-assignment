const superHeroes = require('./super-heroes.json');

/**
 * Will find all of the marvel characters in the data and return them as an array
 * @returns [
 *  {
 *    ...hero,
 *    publisher: 'Marvel'
 *  }
 * ]
 */
const getDCHeroes = (heroes) => {
  const res = [];
  heroes.forEach((each) => {
    if (each.publisher === 'DC Comics') {
      res.push(each);
    }
  });
  return res;
};

/**
 * Converts the character property into an array
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const convertCharactersToArray = (heroes) => {
  heroes.forEach((each, idx, arr) => {
    arr[idx].characters = each.characters.split(',').map(val => val.trim());
  });
  return heroes;
};

/**
 * Coverts super hero data so it is grouped the publisher property
 * @returns {
 *   "publisher 1": [
 *     { ...hero }
 *     ...
 *   ],
 *   "publisher 2" :[
 *     {... hero}
 *     ...
 *   ]
 * }
 */
const groupByPublisher = (heroes) => {
  const ans = {};
  heroes.forEach((each) => {
    if (each.publisher in ans) {
      ans[each.publisher].push(each.superhero);
    } else {
      ans[each.publisher] = [each.superhero];
    }
  });
  return ans;
};

/**
 * Returns and array of DC Comic heroes that have more than 1 character
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const getDCHeroesWithMoreThanOneCharacter = (heroes) => {
  const ans = [];
  heroes.forEach((each) => {
    if (each.characters.length > 1) {
      ans.push(each);
    }
  });
  return ans;
};

module.exports = {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
};
