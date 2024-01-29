/*!
 * React SmartTab v2.0.1
 * The awesome react tab component for ReactJS
 * http://www.techlaboratory.net/react-smarttab
 *
 * Created by Dipu Raj
 * http://dipu.me
 *
 * @license Licensed under the terms of the MIT License
 * https://github.com/techlab/react-smarttab/blob/master/LICENSE
 */

import React from 'react'

export default function TabNavItem(props) {
  const {
    isActive,
    index,
    tabIndex,
    className,
    disabled,
    tabIdx,
    ...attributes
  } = props

  const getClassName = () => {
    return (
      'nav-link ' +
      (className || '') +
      (isActive ? ' active ' : '') +
      (disabled === true ? ' disabled ' : '')
    )
  }

  const getNavIdx = () => {
    return tabIdx + '-' + (index + 1)
  }
// {'#' + getNavIdx()}
  return (
    <li role='presentation'>
      <a
        {...attributes}
        index={index}
        id={getNavIdx()}
        href="javascript return;"
        className={getClassName()}
        role='tab'
        aria-selected={isActive ? 'true' : 'false'}
        aria-disabled={disabled ? 'true' : 'false'}
        aria-controls={getNavIdx()}
      >
        {props.children}
      </a>
    </li>
  )
}
