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

import TabNavItem from '../components/TabNavItem'

export const recursiveMap = (children, fn) => {
  return React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return child
    }

    if (child.props.children) {
      child = React.cloneElement(child, {
        children: recursiveMap(child.props.children, fn)
      })
    }

    return fn(child, index)
  })
}

let tabIdx = 0
export const getTabName = () => {
  return 'tab' + ++tabIdx
}

export const getTabCount = (children) => {
  let tabCount = 0
  recursiveMap(children, (child) => {
    if (child.type === TabNavItem) {
      tabCount++
    }
  })
  return tabCount
}
