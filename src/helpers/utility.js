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
import TabNav from '../components/TabNav'

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

export const getTabNavs = (children) => {
  return children.filter(el => {
    if (el.type === TabNav) {
      return true
    }
  });
}

export const getTabNavItems = (children) => {
  return getTabNavs(children)[0].props.children.filter(el => {
    if (el.type === TabNavItem) {
      return true
    }
  });
}

export const getTabNavElement = (children, index) => {
  return getTabNavItems(children).filter((el, idx) => {
    if (idx === index) {
      return true
    }
  });
}

export const getNextTabIndex = (children, index) => {
  const tabNavItems = getTabNavItems(children);
  let nextIndex = 0
  for(let i = index+1; i < tabNavItems.length; i++) {
    if (isShowableTabElement(tabNavItems[i]) === true) {
      nextIndex = i
      break;
    }
  }
  return nextIndex
}

export const getPreviousTabIndex = (children, index) => {
  const tabNavItems = getTabNavItems(children);
  let nextIndex = tabNavItems.length - 1
  for(let i = index-1; i >= 0; i--) {
    if (isShowableTabElement(tabNavItems[i]) === true) {
      nextIndex = i
      break;
    }
  }
  return nextIndex
}

export const getFirstTabIndex = (children) => {
  return getNextTabIndex(children, -1)
}

export const getLastTabIndex = (children) => {
  return getPreviousTabIndex(children, getTabNavItems(children).length)
}

export const isShowableTabIndex = (children, index) => {
  return isShowableTabElement(getTabNavElement(children, index)[0])
}

export const isShowableTabElement = (elm) => {
  if (elm == null) return false
  if (elm.props.disabled !== true) {
    return true
  }
}

export const getTabNavHash = (tabIdx, index) => {
  index++
  return '#' + tabIdx + '-' + index
}

export const setURLHash = (hash) => {
  history.pushState(null,null,hash)
}

export const scrollToRef = (ref, scrollOffset) => {
  window.scrollTo(0, ref.current.offsetTop - (parseInt(scrollOffset) || 0))
}

export const startTimer = (fn) => {
  return setInterval(() => fn(), 3500)
}

export const stopTimer = (timerId) => {
  clearInterval(timerId)
}

export const resetTimer = (fn) => {
  return fn()
}
