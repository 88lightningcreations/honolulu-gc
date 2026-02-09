'use client';

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Accessibility = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      import('react-axe').then(axe => {
        axe.default(React, ReactDOM, 1000);
      });
    }
  }, []);

  return null;
};

export default Accessibility;
