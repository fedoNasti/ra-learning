interface UserCardProps {
  name: string;
  age: number;
  isActive: boolean;
  hobbies: string[];
  onClick: () => void;
}

function UserCard({ name = 'anonim', age, isActive, hobbies, onClick }: UserCardProps) {
  return (
    <div className="user-card" onClick={onClick}>
      <h2>{name}</h2>
      <p>Возраст: {age}</p>
      <p>Статус: {isActive ? 'Активен' : 'Неактивен'}</p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserCard;