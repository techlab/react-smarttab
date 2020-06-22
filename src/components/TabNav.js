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

export default function TabNav(props) {
  const { className, ...attributes } = props

  return (
    <ul {...attributes} className={'nav' + (className || '')} role='tablist'>
      {props.children}
    </ul>
  )
}
