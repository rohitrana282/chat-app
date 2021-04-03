import React from 'react';

const ConditionalBadge = ({ condition,children }) => {

  return condition ? <Badge content={condition}{children}></Badge> : children;
};

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
