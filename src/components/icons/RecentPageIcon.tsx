import React from 'react';

const RecentPageIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z" />
  </svg>
);

export default RecentPageIcon;
