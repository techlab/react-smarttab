# React Smart Tab
#### The awesome react tab control plugin

[![Build Status](https://travis-ci.org/techlab/react-smarttab.svg?branch=master)](https://travis-ci.org/techlab/react-smarttab)
[![npm version](https://badge.fury.io/js/react-smarttab.svg)](https://badge.fury.io/js/react-smarttab)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/techlab/react-smarttab/master/LICENSE)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Donate on Paypal](https://img.shields.io/badge/PayPal-dipuraj-blue.svg)](https://www.paypal.me/dipuraj)

React Smart Tab is a flexible and heavily customizable **React Tab control plugin**.

> If you think it is cool, you should also check it's sibling [jQuery Smart Tab](http://techlaboratory.net/jquery-smarttab)

+ [Homepage](http://techlaboratory.net/react-smarttab)
+ [Documentation](http://techlaboratory.net/react-smarttab#documentation)
+ [Demos](http://techlaboratory.net/react-smarttab#demo)
+ [GitHub Issues](https://github.com/techlab/react-smarttab/issues)

Screenshots
-----
![jQuery Smart Tab default](http://techlaboratory.net/assets/media/jquery-smart-tab/smarttab-v3-default.png)   

![jQuery Smart Tab dark](http://techlaboratory.net/assets/media/jquery-smart-tab/smarttab-v3-dark.png)   

![jQuery Smart Tab tabs](http://techlaboratory.net/assets/media/jquery-smart-tab/smarttab-v3-tabs.png)   

![jQuery Smart Tab brick](http://techlaboratory.net/assets/media/jquery-smart-tab/smarttab-v3-brick.png)


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

Usage
-----

```jsx
import React from 'react'

import { Tabs, TabNav, TabNavItem, TabContent, TabPanel } from 'react-smarttab'
import 'react-smarttab/dist/index.css'

const App = () => {

  return (
    <Tabs selected='tab-1' theme='dark' orientation='vertical'>
      <TabNav>
        <TabNavItem tab="tab-1">Tab 1</TabNavItem>
        <TabNavItem tab="tab-2">Tab 2</TabNavItem>
        <TabNavItem tab="tab-3">Tab 3</TabNavItem>
        <TabNavItem tab="tab-4">Tab 4</TabNavItem>
      </TabNav>

      <TabContent>
        <TabPanel id="tab-1">
          Tab 1 Content
        </TabPanel>
        <TabPanel id="tab-2">
          Tab 2 Content
        </TabPanel>
        <TabPanel id="tab-3">
          Tab 3 Content
        </TabPanel>
        <TabPanel id="tab-4">
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
