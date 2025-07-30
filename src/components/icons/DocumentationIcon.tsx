import React from 'react';

const DocumentationIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg className={className} viewBox="0 0 12 12" {...props}>
    <rect y="3" width="12" height="9" rx="1" />
    <path d="M2 0h8v2H2z" />
  </svg>
);

export default DocumentationIcon;
