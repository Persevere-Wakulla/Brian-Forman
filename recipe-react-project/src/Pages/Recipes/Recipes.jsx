import { useLoaderData, Link, Form } from "react-router-dom";
import { useState, useEffect } from "react";


const Recipe = () => {
  const Recipes = useLoaderData();
  const [search, setSearch] = useState("");
  const [filteredItem, setFilteredItem] = useState("");

useEffect(()=>{
  
},[search])

  return (
    <>
      <div className="search-container container-fluid p-3">
        <div className="btn-container">
          <button onClick={() => setFilteredItem("all")}>Show All</button>
          <button onClick={() => setFilteredItem("Dinner")}>Dinner</button>
          <button onClick={() => setFilteredItem("Dessert")}>Dessert</button>
          <button onClick={() => setFilteredItem("Appetizer")}>
            Appetizer
          </button>
          <button onClick={() => setFilteredItem("Beverage")}>Beverage</button>
          <button onClick={() => setFilteredItem("Lunch")}>Lunch</button>
          <button onClick={() => setFilteredItem("Breakfast")}>
            Breakfast
          </button>
          <button onClick={() => setFilteredItem("Snacks")}>Snacks</button>
        </div>
        <Form>
          <div className="ser">
            <label htmlFor="search">Search</label>
            <input
              id="search"
              name="search"
              type="text"
              placeholder="Tags, difficulty, ingredients, cuisines....."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </Form>
      </div>
        <div className="top-container container-fluid p-3">
          <h1>Recipes</h1>
          <p className="top-text">
            Here are some delicious recipes for you and your family to make and
            enjoy together. Click the image below for details.
          </p>
        
      <div className="recipe-container container-fluid p-3 d-flex flex-wrap justify-content-center gap-3">
        {Recipes.recipes
          .filter((item) => {
            let tag = item.tags.concat(item.ingredients).concat(item.difficulty).concat(item.cuisine).map((str, index) => str.toLowerCase());
            if (search === "") {
              if (filteredItem === "" || filteredItem === "all") {
                return item;
              }
              return item.mealType.includes(filteredItem);
            } else {
              if (
                (filteredItem === "" || filteredItem === "all") &&
                tag.includes(search.toLowerCase())
              ) {
                return item;
              }
              return (
                item.mealType.includes(filteredItem) &&
                tag.includes(search.toLowerCase())
              );
            }
          })
          .map((recipe) => (
            <Link
              to={recipe.id.toString()}
              className="single-recipe border rounded-3"
              key={recipe.id}
            >
              <img
                className="recipe-img"
                src={recipe.image}
                alt="{recipe.name}"
              />
              <p className="m-auto p-3 fs-1 text">{recipe.name}</p>
            </Link>
          ))}
          </div>
      </div>
    </>
  );
};
export default Recipe;

// Loader function
export const recipesLoader = async () => {
  const res = await fetch("https://dummyjson.com/recipes?limit=0");
  const RecipeArr = await res.json();

  return RecipeArr;
};
