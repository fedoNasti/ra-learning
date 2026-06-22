// pages/RecipePage.jsx
import { useLoaderData } from "react-router";

export default function RecipePage() {
  // useLoaderData возвращает именно то, что вернул loader для этого маршрута
  const recipe = useLoaderData();

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
    </div>
  );
}