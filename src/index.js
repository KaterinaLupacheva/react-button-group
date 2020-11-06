import React, { useState } from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

export const ButtonGroup = ({
  buttons,
  orientation,
  buttonClassName,
  containerClassName
}) => {
  const [clickedId, setClickedId] = useState(-1);

  const handleClick = (id) => {
    setClickedId(id);
  };

  const buttonClass = buttonClassName || `${styles.customButton}`;
  const containerClass =
    containerClassName ||
    (orientation === 'vertical' ? `${styles.vertical}` : `${styles.container}`);

  return (
    <div className={containerClass}>
      {buttons.map((e, i) => (
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={
            i === clickedId
              ? `${buttonClass} ${styles.active}`
              : `${buttonClass}`
          }
        >
          {e}
        </button>
      ))}
    </div>
  );
};

ButtonGroup.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string),
  orientation: PropTypes.oneOf(['horizontal', 'vertical'])
};

ButtonGroup.defaultProps = {
  orientation: 'horizontal'
};

// calculate save button classes
// const saveButtonDefaultClasses = classnames(
//   `${styles.Editext__button}`,
//   `${styles.Editext__save_button}`,
//   hideIcons && `${styles.Editext__hide_default_icons}`
// )
// const saveButtonClass = saveButtonClassName || saveButtonDefaultClasses
