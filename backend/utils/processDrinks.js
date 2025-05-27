exports.processDrinks = (data) => {
  if (!data.drinks) return [];

  return data.drinks.map(drink => ({
    name: drink.strDrink,
    image: drink.strDrinkThumb
  }));
};
