import React, { useState, useEffect } from 'react';

function UsersFunction() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('useEffect (componentDidMount)');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(
      (data) => { setUsers(data); setLoading(false); },
      (error) => { setError(error); setLoading(false); }
    );

    return () => {
      console.log('useEffect cleanup (componentWillUnmount)');
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Обновление состояния');
      setUsers(prev => [...prev])
    }, 5000);
    return () => clearTimeout(timer);
  }, []);


  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <ul>
      {users.map(user =>(
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UsersFunction;