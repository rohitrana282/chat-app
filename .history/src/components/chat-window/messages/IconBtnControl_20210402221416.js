import React from 'react';

const IconBtnControl = ({
  isVisible,
  iconName,
  tooltip,
  onclick,
  badContent,
  ...props
}) => {
  return (
    <div
      className="ml-2"
      style={{ visibility: isVisible ? 'visible' : 'hidden' }}
    ></div>
  );
};

export default IconBtnControl;
