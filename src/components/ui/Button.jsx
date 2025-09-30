// src/components/Button.jsx
import React from 'react';

export const PrimaryButton = ({ children, className = '', onClick }) => (
  <button
    className={`rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary/90 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export const SecondaryButton = ({ children, className = '', onClick }) => (
  <button
    className={`rounded-lg bg-primary/10 px-4 py-2 text-sm font-bold text-primary hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);