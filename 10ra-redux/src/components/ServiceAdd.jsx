import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addService } from '../store/actions';

function ServiceAdd() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name.trim() && price.trim()) {
      dispatch(addService(name, price));
      setName('');
      setPrice('');
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
      <button type="submit">Добавить</button>
    </form>
  );
}

export default ServiceAdd;