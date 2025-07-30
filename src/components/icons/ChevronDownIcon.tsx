import React from 'react';

const ChevronDownIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    width="11"
    height="7"
    viewBox="0 0 11 7"
    {...props}
  >
    <path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
  </svg>
);

export default ChevronDownIcon;
