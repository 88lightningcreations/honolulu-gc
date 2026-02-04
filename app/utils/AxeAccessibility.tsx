'use client';

import { useEffect } from 'react';
import { axeAccessibilityReporter } from './axe';

export default function AxeAccessibility() {
  useEffect(() => {
    axeAccessibilityReporter();
  }, []);

  return null;
}
