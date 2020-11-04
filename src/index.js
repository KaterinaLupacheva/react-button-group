import React, { useState } from 'react'
import styles from './styles.module.css'

export const ButtonGroup = ({ buttons }) => {
  const [clickedId, setClickedId] = useState(-1)

  const handleClick = (id) => {
    setClickedId(id)
  }
  return (
    <div className={styles.container}>
      {buttons.map((e, i) => (
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={i === clickedId ? `${styles.active}` : ''}
        >
          {e}
        </button>
      ))}
    </div>
  )
}

// calculate save button classes
// const saveButtonDefaultClasses = classnames(
//   `${styles.Editext__button}`,
//   `${styles.Editext__save_button}`,
//   hideIcons && `${styles.Editext__hide_default_icons}`
// )
// const saveButtonClass = saveButtonClassName || saveButtonDefaultClasses
