import React, { useContext } from 'react'
import TabContext from '../hooks/TabContext'

export default function TabNavItem(props) {
  const { tabState } = useContext(TabContext)
  const isActive = tabState.selectedTab && tabState.selectedTab === props.tab

  return (
    <li role='presentation'>
      <a
        {...props}
        href={'#' + props.tab}
        tab={props.tab}
        className={'nav-link ' + (isActive ? 'active' : '')}
        role='tab'
        aria-selected={isActive ? 'true' : 'false'}
        aria-disabled={props.disabled ? 'true' : 'false'}
        aria-controls={props.tab}
      >
        {props.children}
      </a>
    </li>
  )
}
