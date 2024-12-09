import { useParams, useLoaderData } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useLoaderData()

  return (
    <div className="recipe-details">
      <h2>{recipe.name}</h2>
      <img className="details-img" src={recipe.image} alt={recipe.name} />
     <ul className="rd">
      <h2>Ingredients</h2>
      {recipe.ingredients.map((ing, index) => (
        <li key={index}>{ing}</li>
      ))}

     </ul>
     <h2>Instructions</h2>
      <ol className="instructions">
        {recipe.instructions.map((instr, index)=>(
          <li key={index}>{instr}</li>
        ))}
      </ol>
      <ul>
        <h2>Tags</h2>
        {recipe.tags.map((tag, index)=>(
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <div>
        <h2>Recipe Info</h2>
        <p>Prep Time Minutes: {recipe.prepTimeMinutes}</p>
        <p>Cook Time Minutes: {recipe.cookTimeMinutes}</p>
        <p>Servings: {recipe.servings}</p>
        <p>Calories Per Serving: {recipe.caloriesPerServing}</p>
        <p>Views: {recipe.reviewCount}</p>
        <p>Ratings: {recipe.rating}</p>

      </div>

    </div>
  );
};

export default RecipeDetails;

// Loader Function

export const recipesDetailsLoader = async ({params})=>{
    const { id } = params

    const res = await fetch('https://dummyjson.com/recipes/' + id)
    const recipeDetailsArr = await res.json()
    
    return recipeDetailsArr
}
