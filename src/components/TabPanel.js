import React, { useContext } from 'react'
import TabContext from '../hooks/TabContext'

export default function TabPanel(props) {
  const { tabState } = useContext(TabContext)
  const isActive = tabState.selectedTab && tabState.selectedTab === props.id

  return (
    <div
      {...props}
      className={'tab-pane ' + isActive + ' ' + (isActive ? 'active' : '')}
      role='tabpanel'
      aria-labelledby={props.id}
    >
      {props.children}
    </div>
  )
}
