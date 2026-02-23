export default function Modal({ children }) {
  return (
    <div className="modal">
      <div className="modal-body">
        {children}
      </div>
      <button className="btn btn-close">Закрыть</button>
    </div>
  );
}