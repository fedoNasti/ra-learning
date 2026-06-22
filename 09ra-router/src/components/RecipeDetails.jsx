import { useParams } from "react-router";

export function RecipeDetails() {
  const { id } = useParams();  // id — это строка "42"
  // загружаем данные по id
  return <h2>Рецепт №{id}</h2>;
}