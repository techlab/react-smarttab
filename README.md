# React Smart Tab
#### The awesome react tab component for ReactJS

[![Build Status](https://travis-ci.org/techlab/react-smarttab.svg?branch=master)](https://travis-ci.org/techlab/react-smarttab)
[![npm version](https://badge.fury.io/js/react-smarttab.svg)](https://badge.fury.io/js/react-smarttab)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/techlab/react-smarttab/master/LICENSE)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Donate on Paypal](https://img.shields.io/badge/PayPal-dipuraj-blue.svg)](https://www.paypal.me/dipuraj)

React Smart Tab is a React component library for easy implementation of tab interface.

> If you think it is cool, you should also check it's sibling [jQuery Smart Tab](http://techlaboratory.net/jquery-smarttab)

+ [Homepage](http://techlaboratory.net/react-smarttab)
+ [Documentation](http://techlaboratory.net/react-smarttab#documentation)
+ [Demos](http://techlaboratory.net/react-smarttab#demo)
+ [GitHub Issues](https://github.com/techlab/react-smarttab/issues)

Screenshots
-----
![jQuery Smart Tab pills](http://techlaboratory.net/assets/media/react-smart-tab/react-smarttab-v2-pills.png)   

![jQuery Smart Tab dark vertical](http://techlaboratory.net/assets/media/react-smart-tab/react-smarttab-v2-dark-vertical.png)   

![jQuery Smart Tab default](http://techlaboratory.net/assets/media/react-smart-tab/react-smarttab-v2-default.png)   

![jQuery Smart Tab brick](http://techlaboratory.net/assets/media/react-smart-tab/react-smarttab-v2-brick.png)


Installation
-----

### [NPM](https://www.npmjs.com/package/react-smarttab)
```bash
npm install react-smarttab --save
```

### [Yarn](https://yarn.pm/react-smarttab)
```bash
yarn add react-smarttab
```   

Features
-----

+ Responsive design
+ Standalone CSS
+ Bootstrap compatible
+ Various themes included
+ Customizable CSS
+ Supports all modern browsers
+ Easy to implement
+ Callback event support

Usage
-----

```jsx
import React from 'react'

import { Tabs, TabNav, TabNavItem, TabContent, TabPanel } from 'react-smarttab'
import 'react-smarttab/dist/index.css'

const App = () => {

  return (
    <Tabs>
      <TabNav>
        <TabNavItem>Tab 1</TabNavItem>
        <TabNavItem>Tab 2</TabNavItem>
        <TabNavItem>Tab 3</TabNavItem>
        <TabNavItem>Tab 4</TabNavItem>
      </TabNav>

      <TabContent>
        <TabPanel>
          Tab 1 Content
        </TabPanel>
        <TabPanel>
          Tab 2 Content
        </TabPanel>
        <TabPanel>
          Tab 3 Content
        </TabPanel>
        <TabPanel>
          Tab 4 Content
        </TabPanel>
      </TabContent>
    </Tabs>  
  )
}

export default App
```

Please see the [documentation](http://techlaboratory.net/react-smarttab#documentation) for more details on implementation and usage.  

##### Optional parameters

Please see the [parameter descriptions](http://techlaboratory.net/react-smarttab#parameter-description) for more details.

```jsx
import React from 'react'

import { Tabs, TabNav, TabNavItem, TabContent, TabPanel } from 'react-smarttab'
import 'react-smarttab/dist/index.css'

const App = () => {

  return (
    <Tabs
    tabName='tab1'
    selected='0'
    theme='dark'
    orientation='horizontal
    justified='true'
    enableURLhash={true}
    onLeaveTab={(currentIndex, nextIndex) => { console.log("leaveTab", currentIndex, nextIndex) }}
    onShowTab={(e) => { console.log("showTab", e) }}
    >
      <TabNav>
        <TabNavItem>Tab 1</TabNavItem>
        <TabNavItem>Tab 2</TabNavItem>
        <TabNavItem>Tab 3</TabNavItem>
        <TabNavItem>Tab 4</TabNavItem>
      </TabNav>

      <TabContent>
        <TabPanel>
          Tab 1 Content
        </TabPanel>
        <TabPanel>
          Tab 2 Content
        </TabPanel>
        <TabPanel>
          Tab 3 Content
        </TabPanel>
        <TabPanel>
          Tab 4 Content
        </TabPanel>
      </TabContent>
    </Tabs>  
  )
}

export default App
```

License
----
[MIT License](https://github.com/techlab/react-smarttab/blob/master/LICENSE)

Contribute
----
If you like the project please support with your contribution.

[Donate on Paypal](https://www.paypal.me/dipuraj)

Thank you and Happy Coding!
