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
import React, { useState, useEffect, useRef } from 'react'
import {
  recursiveMap,
  getTabName,
  setURLHash,
  getTabNavHash,
  scrollToRef,
  isShowableTabIndex,
  getNextTabIndex,
  getPreviousTabIndex,
  getLastTabIndex,
  getFirstTabIndex,
  startTimer,
  stopTimer
} from '../helpers/utility'

import TabNavItem from './TabNavItem'
import TabPanel from './TabPanel'

export default function Tabs(props) {
  const {
    selected,
    theme,
    tabName,
    className,
    justified,
    orientation,
    enableURLhash,
    backButtonSupport,
    keyNavigation,
    scrollOffset,
    autoProgress,
    autoProgressInterval,
    stopOnFocus,
    onLeaveTab,
    onShowTab,
    ...attributes
  } = props
  const [tabIdx] = useState(tabName || getTabName())
  const [selectedIndex, updateSelectedIndex] = useState(0)
  const [timerId, updateTimerId] = useState(0)
  const tabRef = useRef(null)


  const navigateTab = (index) => {
    const nextIndex = parseInt(index)
    if (nextIndex !== selectedIndex && isShowableTabIndex(props.children, nextIndex)) {
      if (typeof onLeaveTab === 'function') {
        if (onLeaveTab(selectedIndex, nextIndex) === false) return
      }

      // console.log("navigateTab", nextIndex, selectedIndex)
      updateSelectedIndex(nextIndex)
      // console.log("navigateTab2", nextIndex, selectedIndex)

      if (enableURLhash !== false) {
        setURLHash(getTabNavHash(tabIdx, nextIndex))
      }

      if (typeof onShowTab === 'function') {
        onShowTab(nextIndex)
      }
    }
  }

  const getChildren = (children) => {
    return recursiveMap(children, (child, index) => {
      if (child.type === TabNavItem) {
        // console.log("getChildren", index, selectedIndex)
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

  useEffect(() => {
    navigateTab(selected)
  }, [selected])


  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // console.log("Timer Init", autoProgress);
    if (autoProgress) {

      // let tId = startTimer(() => {
      //   let newIdx = getNextTabIndex(props.children, selectedIndex)
      //   console.log("Timer Call", selectedIndex, newIdx);
        // navigateTab(selectedIndex => getNextTabIndex(props.children, selectedIndex))
      // })

      let tId = setInterval(() => {
        ((selectedIndex) => {
          let newIdx = getNextTabIndex(props.children, selectedIndex)
          console.log("Timer Call", selectedIndex, newIdx);
          navigateTab(newIdx)
          return selectedIndex
        })(selectedIndex)
        // updateSelectedIndex(newIdx => newIdx)
        // console.log("Timer Call", timerId);
        // let tt = timerId + 1
        // navigateTab(selectedIndex => getNextTabIndex(props.children, selectedIndex))
        updateTimerId(timerId => timerId + 1)
        // setCounter(counter => counter + 1);
      }, 3500)
      //
      // updateTimerId(tId)
    }
  }, [])



  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter(counter => counter + 1);
  //   }, 5000);
  //
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  useEffect(() => {
    console.log("backButtonSupport", backButtonSupport);
    if (backButtonSupport) {
      window.addEventListener('hashchange', onHashChange)
      return () => window.removeEventListener('hashchange', onHashChange)
    }
  }, [backButtonSupport])

  const onHashChange = (e) => {
    const hash = window.location.hash
    if (hash.indexOf(tabIdx) !== -1) {
      const hashChunks = hash.split('-');
      if (hashChunks.length == 2) {
        scrollToRef(tabRef, scrollOffset)
        navigateTab(hashChunks[1] - 1)
      }
    }
  }

  const handleClick = (e) => {
    e.preventDefault()

    const node = e.currentTarget
    if (node && node.getAttribute('role') === 'tab') {
      navigateTab(node.getAttribute('index'))
    }
  }

  const handleKeyUp = (e) => {
    if (keyNavigation) {
      if (e.keyCode === 37 || e.keyCode === 38) {
        // Left
        navigateTab(getPreviousTabIndex(props.children, selectedIndex))
      } else if (e.keyCode === 39 || e.keyCode === 40) {
        // Right
        navigateTab(getNextTabIndex(props.children, selectedIndex))
      } else if (e.keyCode === 35) {
        // End
        navigateTab(getLastTabIndex(props.children))
      } else if (e.keyCode === 36) {
        // Home
        navigateTab(getFirstTabIndex(props.children))
      }
    }
  }

  const getClassName = () => {
    return (
      'st st-theme-' +
      (theme || 'default') +
      (className || '') +
      (orientation ? ' st-' + orientation : '') +
      (justified === 'true' ? ' st-justified' : '')
    )
  }

  return (
    <div {...attributes} className={getClassName()} ref={tabRef} onKeyUp={handleKeyUp} tabIndex="-1">
      {timerId}
      {getChildren(props.children)}
    </div>
  )
}
