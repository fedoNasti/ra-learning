export interface MessageProps {
  type: 'success' | 'error' | 'warning' | 'info';
  text: string;
}

export default function Message ({ type, text } : MessageProps) {
  return (
    <div className={`message message-${type}`}>
      {text}
    </div>
  );
}