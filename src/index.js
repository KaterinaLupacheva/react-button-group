import React, { useState } from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

export const ButtonGroup = ({
  buttons,
  orientation,
  buttonClassName,
  containerClassName,
  activeButtonClassName,
  onButtonClick
}) => {
  const [clickedId, setClickedId] = useState(-1);

  const activeClass = activeButtonClassName || `${styles.active}`;
  const buttonClass = buttonClassName || `${styles.customButton}`;
  const containerClass =
    containerClassName ||
    (orientation === 'vertical' ? `${styles.vertical}` : `${styles.container}`);

  return (
    <div className={containerClass}>
      {buttons.map((e, i) => (
        <button
          key={i}
          name={e}
          onClick={(event) => {
            setClickedId(i);
            onButtonClick(event);
          }}
          className={
            i === clickedId ? `${buttonClass} ${activeClass}` : `${buttonClass}`
          }
        >
          {e}
        </button>
      ))}
    </div>
  );
};

ButtonGroup.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  buttonClassName: PropTypes.string,
  containerClassName: PropTypes.string,
  activeButtonClassName: PropTypes.string,
  onButtonClick: PropTypes.func
};

ButtonGroup.defaultProps = {
  orientation: 'horizontal'
};
