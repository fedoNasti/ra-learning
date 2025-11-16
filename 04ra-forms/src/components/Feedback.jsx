import { useState } from "react";

export function Feedback() {
  const [form, setForm] = useState({ name: '', });

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(evt.type);
    console.log(evt.target);
    console.log(form);
  }

  const handleNameChange = ({target}) => {
    const {name, value} = target;
    setForm(prevForm => ({...prevForm, [name]: value}));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Ваше имя</label>
      <input id="name" name="name" value={form.name} onChange={handleNameChange} />

      <label htmlFor="score">Насколько вы удовлетворены?</label>
      <select name="score" id="score">
        <option value="good">Удовлетворен</option>
        <option value="bad">Не удовлетворен</option>
      </select>

      <input type="checkbox" id="agreement" name="agreement" />
      <label htmlFor="agreement">Согласен на передачу данных</label>

      <button type="submit">Отправить</button>
    </form>
  )
}