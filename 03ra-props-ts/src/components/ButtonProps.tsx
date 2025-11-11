interface ButtonProps {
  label: string;
  primary?: boolean;
  disabled?: boolean;
  large?: boolean;
}

function Button({
  label,
  primary = false,
  disabled = false,
  large = false,
}: ButtonProps) {

  const className = [
    'btn',
    primary && 'btn-primary',
    large && 'btn-large',
  ].filter(Boolean).join(' ');

  return (
    <button className={className} disabled={disabled}>
      {label}
    </button>
  );
}

export default Button;