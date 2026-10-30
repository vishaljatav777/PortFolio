import React from 'react';
import './Button.css';

export function Button({
  children,
  variant = 'primary',
  href,
  download,
  target,
  rel,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  ...props
}) {
  const combinedClassName = `btn btn-${variant} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        download={download}
        target={target}
        rel={rel}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

