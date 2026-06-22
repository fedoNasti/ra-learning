export async function loader({ params }) {
  // params.id соответствует динамическому сегменту пути ":id"
  const response = await fetch(`/api/recipes/${params.id}`);
  const recipe = await response.json();
  return recipe; // Эти данные получат компоненты через useLoaderData()
}