import { createBrowserRouter } from "react-router";
import MainTemplate from "./layouts/MainTemplate";
import HomePage from "./pages/HomePage";
import ContactsPage from "./pages/ContactsPage";
import RecipePage from "./components/RecipeDetails";
import { loader as recipeLoader } from "./components/loader";
import UserProfilePage, { loader as userProfileLoader } from "./pages/UserProfilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate/>,
    children: [
      { index: true, element: <HomePage/> },
      { path: "contacts", element: <ContactsPage/> },
      {
      path: "recipes",
        children: [
          { index: true, element: <h2>Recipes List</h2> },
          { path: ":id", element: <RecipePage />, loader: recipeLoader },
        ],
      },
      {
      path: "/users/:userId",
      element: <UserProfilePage />,
      loader: userProfileLoader,
      },
      {
      path: "*",
      element: <Page404 />,
      },
    ],
  },
]);