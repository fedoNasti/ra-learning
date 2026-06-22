import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addService, changeService } from '../store/actions';

function ServiceChange({ serviceId, currentName, currentPrice, onCancel }) {
  const [name, setName] = useState(currentName || '');
  const [price, setPrice] = useState(currentPrice || '');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name.trim() && price.trim()) {
      dispatch(changeService(serviceId, name, price));
      onCancel();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Название услуги"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Цена"
        required
      />
      <button type="submit">Сохранить</button>
      <button type="button" onClick={onCancel}>Отмена</button>
    </form>
  );
}

export default ServiceChange;