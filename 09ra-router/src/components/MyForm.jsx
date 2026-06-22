import { useState } from "react";

export default function MyForm() {
  const [text, setText] = useState('');

  return (
    <input
    value={text}
    onChange={e => setText(e.target.value)}
    />
  );
}