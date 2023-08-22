const form = document.querySelector("#searchForm");
const input = document.querySelector("#searchName");
const divResult = document.querySelector("#allCocktails");

async function fetchCocktails(name) {
  name = name.trim();
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  );
  if (!response.ok) {
    throw new Error("Error fetching!!!");
  }
  const data = await response.json();
  return data.drinks;
}

function displayCocktails(cocktails) {
  divResult.innerHTML = "";

  if (!cocktails) {
    divResult.innerHTML = "<p>No results found</p>";
    return;
  }

  cocktails.forEach((cocktail) => {
    const cocktailCard = document.createElement("div");

    const cocktailTitle = document.createElement("h2");
    cocktailTitle.innerText = cocktail.strDrink;
    cocktailCard.append(cocktailTitle);

    const cocktailImage = document.createElement("img");
    cocktailImage.src = cocktail.strDrinkThumb;
    cocktailImage.alt = `${cocktail.strDrink} image`;
    cocktailCard.append(cocktailImage);

    const list = document.createElement("ul");
    for (let i = 1; i < 16; i++) {
      const ingredient = cocktail[`strIngredient${i}`];
      const measure = cocktail[`strMeasure${i}`];

      if (ingredient && measure) {
        const listItem = document.createElement("li");
        listItem.innerText = `${ingredient} - ${measure}`;
        list.append(listItem);
      }
    }
    cocktailCard.append(list);

    const instructions = document.createElement("p");
    instructions.innerText = cocktail.strInstructions;
    cocktailCard.append(instructions);

    divResult.append(cocktailCard);
  });
}

form.onsubmit = async (e) => {
  e.preventDefault();

  try {
    const cocktails = await fetchCocktails(input.value);
    displayCocktails(cocktails);
  } catch (e) {
    alert(e.message);
  }
};
