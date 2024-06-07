import React from 'react';

export const NavigateOutside = ({
  className = '',
  href = '#',
  icon = '',
  text,
}) => {
  return (
    <a
      className={className}
      href={href}
      rel='noopener noreferrer'
      target='_blank'
    >
      {icon} {text}
    </a>
  );
};
