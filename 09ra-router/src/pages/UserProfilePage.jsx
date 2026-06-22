import { defer, useLoaderData, Await } from "react-router";
import { Suspense } from "react";

// Этот запрос быстрый
async function getUserProfile(userId) {
  const res = await fetch(`/api/users/${userId}`);
  return res.json();
}

// Этот запрос медленный
async function getUserHistory(userId) {
  const res = await fetch(`/api/users/${userId}/history`);
  return res.json();
}

export async function loader({ params }) {
  const userId = params.userId;

  // Запускаем оба запроса, НО НЕ ждём медленный через 'await'
  const historyPromise = getUserHistory(userId);
  const profile = await getUserProfile(userId); // Ждём только быстрый

  return defer({
    profile: profile,
    userHistory: historyPromise,// <-- Это поле будет загружено позже
  });
}

export default function UserProfile() {
  const data = useLoaderData(); // data = { profile: {...}, userHistory: Promise }

  return (
    <div>
      <h1>{data.profile.name}</h1> {/* Основные данные уже здесь */}
      <h2>История действий:</h2>

      {/* Для отложенной части используем Await */}
      <Suspense fallback={<div>Загрузка истории...</div>}>
        <Await resolve={data.userHistory} errorElement={<p>Ошибка загрузки истории!</p>}>
          {/* Когда Promise выполнится, отрендерится этот колбэк */}
          {(history) => (
            <ul>
              {history.map((item) => (<li key={item.id}>{item.text}</li>))}
            </ul>
          )}
        </Await>
      </Suspense>
    </div>
  );
}