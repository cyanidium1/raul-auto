'use client';

export type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: React.ReactNode;
};

export default function Button({
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  children,
}: ButtonProps) {
  return (
    <button
      className={`transform transition duration-300 ease-in-out focus:outline-focus outline-none ${className} ${disabled
        ? 'bg-gray-400 text-gray-600 cursor-not-allowed '
        : 'hover:scale-105 hover:text-hoverprimary bg-gradient-red'
        }`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
