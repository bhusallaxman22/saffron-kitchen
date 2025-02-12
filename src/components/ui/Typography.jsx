import React from 'react';

/**
 * Heading: A component for all page and section headings.
 * Uses a global class to ensure consistency.
 */
export const Heading = ({ children, className, ...props }) => (
    <h1 className={`global-heading ${className}`} {...props}>
        {children}
    </h1>
);

/**
 * Subheading: A component for all subheadings.
 * Uses a global class to ensure consistency.
 */
export const Subheading = ({ children, className, ...props }) => (
    <h2 className={`global-subheading ${className}`} {...props}>
        {children}
    </h2>
);
