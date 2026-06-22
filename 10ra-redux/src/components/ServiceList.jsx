import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { removeService, changeService, fetchServices } from "../store/actions";
import ServiceChange from "./ServiceChange";

function ServiceList() {
  const { items: services, loading, error } = useSelector( state => state.services );
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const handleEditClick = (id) => {
    setEditingId(id); // открываем форму для этой услуги
  };

  const handleCancelEdit = () => {
    setEditingId(null); // закрываем форму
  };

  if (loading) {
    return <div>Загрузка услуг...</div>; 
  }

  if (error) {
    return <div style={{ color: 'red' }}>Ошибка: {error}</div>;
  }

  return (
    <ul>
      {services.map(service => (
        <li key={service.id}>
          {service.name} - {service.price}₽ 
          <button onClick={() => handleEditClick(service.id)}>
            Изменить
          </button>
          <button onClick={() => dispatch(removeService(service.id))}>
            X
          </button>
          {editingId === service.id && (
            <ServiceChange
              serviceId={service.id}
              currentName={service.name}
              currentPrice={service.price}
              onCancel={handleCancelEdit}
            />
          )}
        </li>
      ))}
    </ul>
  )
}

export default ServiceList;