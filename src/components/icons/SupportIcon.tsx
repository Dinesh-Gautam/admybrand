import React from 'react';

const SupportIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg className={className} viewBox="0 0 12 12" {...props}>
    <path d="M10.5 0h-9A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 0zM10 7L8.207 5.207l-3 3-1.414-1.414 3-3L5 2h5v5z" />
  </svg>
);

export default SupportIcon;
