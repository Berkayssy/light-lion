import React from 'react';
import './button.css';

type ButtonType = 'primary' | 'default' | 'dashed' | 'text' | 'link';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: ButtonType;
}

export const Button: React.FC<Props> = ({ type = 'default', children, ...props }) => {
  return (
    <button className={`btn ${type}`} {...props}>
      {children}
    </button>
  );
};