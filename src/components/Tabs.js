import React, { useState } from 'react'
import TabContext from '../hooks/TabContext'

export default function Tabs(props) {
  TabContext.selectedTab = props.selected
  const [tabState, updateTabState] = useState(TabContext)

  let className = 'st st-theme-' + (props.theme || 'default')
  className += props.orientation ? ' st-' + props.orientation : ''
  className += props.justified === true ? ' st-justified' : ''

  function handleClick(e) {
    const node = e.target
    if (node && node.getAttribute('role') === 'tab') {
      updateTabState({
        selectedTab: node.getAttribute('tab')
      })
    }
  }

  return (
    <TabContext.Provider value={{ tabState, updateTabState }}>
      <div {...props} className={className} onClick={handleClick}>
        {props.children}
      </div>
    </TabContext.Provider>
  )
}
