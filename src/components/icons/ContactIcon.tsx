import React from 'react';

const ContactIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg className={className} viewBox="0 0 12 12" {...props}>
    <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" />
  </svg>
);

export default ContactIcon;
