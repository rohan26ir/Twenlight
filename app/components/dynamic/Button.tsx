'use client';

import React from 'react';


{/* 
  
  <Button 
  buttonInfo={{
    text: 'Click me',
    variant: 'primary',
    size: 'md',
    onClick: () => console.log('clicked')
  }}
  />

<Button 
  buttonInfo={{
    text: 'Visit site',
    link: 'https://example.com',
    variant: 'outline'
  }}
/>

*/}

interface ButtonInfo {
  text: string;
  link?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

interface ButtonProps {
  buttonInfo: ButtonInfo;
}

const Button: React.FC<ButtonProps> = ({ buttonInfo }) => {
  const { 
    text, 
    link, 
    variant = 'primary', 
    size = 'md',
    disabled = false,
    fullWidth = false,
    onClick 
  } = buttonInfo;

  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 active:bg-blue-800',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 active:bg-gray-800',
    outline: 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500 active:bg-blue-100',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500 active:bg-gray-200',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 active:bg-red-800'
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed pointer-events-none';
  const widthStyles = fullWidth ? 'w-full' : '';

  const buttonClasses = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${disabled ? disabledStyles : ''}
    ${widthStyles}
  `.trim().replace(/\s+/g, ' ');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  // Render as link if link prop is provided
  if (link && !disabled) {
    return (
      <a 
        href={link}
        className={buttonClasses}
        onClick={handleClick}
      >
        {text}
      </a>
    );
  }

  // Render as button otherwise
  return (
    <button
      type="button"
      className={buttonClasses}
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;