import { useRef } from "react";

export function FileChooser() {
  const fileRef = useRef();

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(fileRef.current.files);
  }

  return (
    <form onSubmit={handleSubmit} >
      <input type="file" name="formFile" id="formFile" ref={fileRef} />
      <button type="submit">Ok</button>
    </form>
  )
}