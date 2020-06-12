import React from 'react'

export default function TabNav(props) {
  return (
    <ul {...props} className='nav' role='tablist'>
      {props.children}
    </ul>
  )
}
