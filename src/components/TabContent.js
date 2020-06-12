import React, { useContext } from 'react'
import TabContext from '../hooks/TabContext'

export default function TabContent(props) {
  const { tabState } = useContext(TabContext)

  return (
    <div {...props} className={'tab-content ' + (tabState.selected || 'no')}>
      {props.children}
    </div>
  )
}
