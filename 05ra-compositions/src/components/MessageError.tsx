import Message, { MessageProps } from "./Message";

interface MessageErrorProps extends Omit<MessageProps, 'type'> {
  text: string;
};

export default function MessageError ( props: MessageErrorProps) {
  const messageProps: MessageProps = {
    ...props,
    type: "error"
  }

  return <Message {...messageProps} />;
}