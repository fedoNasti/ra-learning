import { useLocation } from "react-router";

function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    // отправляем в аналитику: пользователь открыл location.pathname
    console.log("Страница:", location.pathname);
  }, [location]);

  return null;
}