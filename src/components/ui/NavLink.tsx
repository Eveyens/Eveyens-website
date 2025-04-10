import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, className = '' }) => {
  const isActive = window.location.pathname === href;
  
  return (
    <a
      href={href}
      className={`${className} ${
        isActive ? 'text-primary-500' : ''
      }`}
    >
      {children}
    </a>
  );
};