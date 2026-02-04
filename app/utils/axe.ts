'use client';

import React from 'react';

export const axeAccessibilityReporter = async () => {
  if (process.env.NODE_ENV === 'development') {
    const axe = await import('react-axe');
    const ReactDOM = await import('react-dom');
    axe.default(React, ReactDOM, 1000);
  }
};
