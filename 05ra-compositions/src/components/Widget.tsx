interface WidgetProps {
  title: string;
  children: React.ReactNode;
}

export default function Widget ({ title, children }: WidgetProps) {
  return (
    <div className="widget">
      <h5>{title}</h5>
      {children}
    </div>
  );
}