import { useState, useEffect } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
    .then(res => res.json())
    .then(data => setUser(data));
  }, [userId]);

  useEffect(() => {
    const timer = setInterval(() => console.log('tik'), 1000);
    return () => clearInterval(timer);
  }, []);

  return <div>{user ? user.name: 'Loading...'}</div>;
}

export default UserProfile;