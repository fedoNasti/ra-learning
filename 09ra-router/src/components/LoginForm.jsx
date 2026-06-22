import { useNavigate } from "react-router";

export function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // ... логин прошёл успешно
    navigate("/profile");  // переходим на страницу профиля
  }

  return <button onClick={handleSubmit}>Log In</button>
}