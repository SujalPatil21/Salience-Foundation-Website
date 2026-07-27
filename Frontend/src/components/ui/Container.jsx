import React from 'react';
import { CONTAINER } from '../../constants/design';

/**
 * Reusable layout Container mapping to design tokens.
 */
const Container = ({ children, className = '', clean = false }) => {
  return (
    <div className={`mx-auto ${CONTAINER.maxWidth} ${clean ? '' : CONTAINER.padding} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
