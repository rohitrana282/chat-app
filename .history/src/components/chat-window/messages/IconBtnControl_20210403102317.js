import React from 'react';

const ConditionalBadge = ({ condition }) => {};

const IconBtnControl = ({
  isVisible,
  iconName,
  tooltip,
  onclick,
  badgeContent,
  ...props
}) => {
  return (
    <div
      className="ml-2"
      style={{ visibility: isVisible ? 'visible' : 'hidden' }}
    >
      <ConditionalBadge condition={badgeContent}></ConditionalBadge>
    </div>
  );
};

export default IconBtnControl;
