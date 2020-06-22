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
import React, { useState, useEffect } from 'react'
import { recursiveMap, getTabName } from '../helpers/utility'

import TabNavItem from './TabNavItem'
import TabPanel from './TabPanel'

export default function Tabs(props) {
  const {
    selected,
    theme,
    className,
    justified,
    orientation,
    enableURLhash,
    tabName,
    onLeaveTab,
    onShowTab,
    ...attributes
  } = props
  const [tabIdx] = useState(tabName || getTabName())
  const [selectedIndex, updateSelectedIndex] = useState(0)

  useEffect(() => {
    navigateTab(selected)
  }, [selected])

  const navigateTab = (index) => {
    const nextIndex = parseInt(index)
    if (nextIndex !== selectedIndex) {
      if (typeof onLeaveTab === 'function') {
        if (onLeaveTab(selectedIndex, nextIndex) === false) return
      }

      updateSelectedIndex(nextIndex)

      if (typeof onShowTab === 'function') {
        onShowTab(nextIndex)
      }
    }
  }

  const getChildren = (children) => {
    return recursiveMap(children, (child, index) => {
      if (child.type === TabNavItem) {
        return React.cloneElement(child, {
          index: index,
          tabIdx: tabIdx,
          isActive: index === selectedIndex,
          onClick: handleClick
        })
      } else if (child.type === TabPanel) {
        return React.cloneElement(child, {
          index: index,
          isActive: index === selectedIndex
        })
      } else {
        return child
      }
    })
  }

  const handleClick = (e) => {
    if (props.enableURLhash === false) {
      e.preventDefault()
    }

    const node = e.currentTarget
    if (node && node.getAttribute('role') === 'tab') {
      navigateTab(node.getAttribute('index'))
    }
  }

  const getClassName = () => {
    console.log(
      'justified',
      justified,
      justified === true ? ' st-justified' : ''
    )
    return (
      'st st-theme-' +
      (theme || 'default') +
      (className || '') +
      (orientation ? ' st-' + orientation : '') +
      (justified === 'true' ? ' st-justified' : '')
    )
  }

  return (
    <div {...attributes} className={getClassName()}>
      {getChildren(props.children)}
    </div>
  )
}
