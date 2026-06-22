import { Outlet } from "react-router";
import MainMenu from "../components/MainMenu";

export const MainTemplate = () => {
  return (
    <div>
      <header>
        <MainMenu />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}