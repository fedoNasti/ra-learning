const Counter = ({ value, decOne, addOne }) => {
  return (
    <div>
      <button onClick={decOne}>-</button>
      <span>{value}</span>
      <button onClick={addOne}>+</button>
    </div>
  )
}

export default Counter;