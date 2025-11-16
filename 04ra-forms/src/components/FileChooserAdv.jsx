import { useState } from "react";

export function FileChooserAdv() {
  const [form, setForm] = useState({
    name: '',
    files: null,
  });

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(form);
  }

  const handleChange = evt => {
    const {name, value} = evt.target;

    setForm(prevForm => ({...prevForm, [name]: value}));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" id="name" value={form.name} onChange={handleChange} />
      <input type="file" name="files" id="files" onChange={handleChange} />
      <button type="submit">OK</button>
    </form>
  )
}