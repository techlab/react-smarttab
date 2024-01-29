import React, { useState } from 'react'

import {
  Tabs,
  TabNav,
  TabNavItem,
  TabContent,
  TabPanel
} from 'react-smarttab'
import 'react-smarttab/dist/index.css'

import './index.css'

const App = () => {
  // Demo settings for Tab 1
  const [tabSettings, updateTabSettings] = useState({
    selected:0,
    theme:'default',
    vertical:false,
    justified:true
  });

  // Demo settings for Tab 2
  const [tabSettings2, updateTabSettings2] = useState({
    selected:0,
    theme:'default',
    vertical:true,
    justified:true
  });

  return <div>
    <p>
      <label>Theme:</label>
      <select value={tabSettings.theme} onChange={(e) => updateTabSettings(Object.assign({}, tabSettings, {theme:e.target.value}))}>
            <option value="default">Default</option>
            <option value="classic">Classic</option>
            <option value="dark">Dark</option>
            <option value="brick">Brick</option>
            <option value="round">Round</option>
            <option value="pills">Pills</option>
            <option value="github">GitHub</option>
            <option value="sourceforge">Sourceforge</option>
      </select>

      &nbsp;&nbsp;&nbsp;&nbsp;
      <input type="checkbox" id="is_vertical" checked={tabSettings.vertical} onChange={(e) => updateTabSettings(Object.assign({}, tabSettings, {vertical:e.target.checked}))} />
      <label htmlFor="is_vertical">Vertical</label>

      &nbsp;&nbsp;&nbsp;&nbsp;
      <input type="checkbox" id="is_justified" checked={tabSettings.justified} onChange={(e) => updateTabSettings(Object.assign({}, tabSettings, {justified:e.target.checked}))} />
      <label htmlFor="is_justified">Justified</label>

      &nbsp;&nbsp;&nbsp;&nbsp;
      <label>Go To:</label>
      <select value={tabSettings.selected} onChange={(e) => { updateTabSettings(Object.assign({}, tabSettings, {selected:e.target.value}))}}>
        <option value="0">1</option>
        <option value="1">2</option>
        <option value="2">3</option>
        <option value="3">4</option>
      </select>
    </p>
    <br />


    <Tabs
      tabName="tabber"
      selected={tabSettings.selected}
      theme={tabSettings.theme}
      orientation={tabSettings.vertical ? 'vertical' : 'horizontal'}
      justified={tabSettings.justified.toString()}
      enableURLhash={true}
      backButtonSupport={true}
      keyNavigation={true}
      scrollOffset="20"
      autoProgress={false}
      autoProgressInterval={3500}
      stopOnFocus={true}
      onLeaveTab={(e) => { console.log("leaveTab", e) }}
      onShowTab={(e) => { console.log("showTab", e) }}
      >
      <TabNav>
        <TabNavItem><strong>Tab 1</strong> This is tab description</TabNavItem>
        <TabNavItem ><strong>Tab 2</strong> This is tab description</TabNavItem>
        <TabNavItem><strong>Tab 3</strong> This is tab description</TabNavItem>
        <TabNavItem ><strong>Tab 4</strong> This is tab description</TabNavItem>
      </TabNav>

      <TabContent>
        <TabPanel>
          <h3>Tab 1 Content</h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </TabPanel>
        <TabPanel>
          <h3>Tab 2 Content</h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </TabPanel>
        <TabPanel>
          <h3>Tab 3 Content</h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
        </TabPanel>
        <TabPanel>
          <h3>Tab 4 Content</h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </TabPanel>
      </TabContent>
    </Tabs>

    <div className="spacer"></div>
    <br /><br />
    <p>
      <label>Theme:</label>
      <select value={tabSettings2.theme} onChange={(e) => updateTabSettings2(Object.assign({}, tabSettings2, {theme:e.target.value}))}>
            <option value="default">Default</option>
            <option value="classic">Classic</option>
            <option value="dark">Dark</option>
            <option value="brick">Brick</option>
            <option value="round">Round</option>
            <option value="pills">Pills</option>
            <option value="github">GitHub</option>
            <option value="sourceforge">Sourceforge</option>
      </select>

      &nbsp;&nbsp;&nbsp;&nbsp;
      <input type="checkbox" id="is_vertical2" checked={tabSettings2.vertical} onChange={(e) => updateTabSettings2(Object.assign({}, tabSettings2, {vertical:e.target.checked}))} />
      <label htmlFor="is_vertical2">Vertical</label>

      &nbsp;&nbsp;&nbsp;&nbsp;
      <input type="checkbox" id="is_justified2" checked={tabSettings2.justified} onChange={(e) => updateTabSettings2(Object.assign({}, tabSettings2, {justified:e.target.checked}))} />
      <label htmlFor="is_justified2">Justified</label>

      &nbsp;&nbsp;&nbsp;&nbsp;
      <label>Go To:</label>
      <select value={tabSettings2.selected} onChange={(e) => { updateTabSettings2(Object.assign({}, tabSettings2, {selected:e.target.value}))}}>
        <option value="0">1</option>
        <option value="1">2</option>
        <option value="2">3</option>
        <option value="3">4</option>
      </select>
    </p>
    <br />

    <Tabs
      selected={tabSettings2.selected}
      theme={tabSettings2.theme}
      orientation={tabSettings2.vertical ? 'vertical' : 'horizontal'}
      justified={tabSettings2.justified.toString()}
      enableURLhash={true}
      backButtonSupport={true}
      keyNavigation={true}
      scrollOffset="30"
      onLeaveTab={(currentIndex, nextIndex) => { console.log("leaveTab", currentIndex, nextIndex) }}
      onShowTab={(e) => { console.log("showTab", e) }}
      >
      <TabNav>
        <TabNavItem><strong>Tab 1</strong> This is tab description</TabNavItem>
        <TabNavItem><strong>Tab 2</strong> This is tab description</TabNavItem>
        <TabNavItem><strong>Tab 3</strong> This is tab description</TabNavItem>
      </TabNav>

      <TabContent>
        <TabPanel id="tab-1">
          <h3>Tab 1 Content</h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </TabPanel>
        <TabPanel id="tab-2">
          <h3>Tab 2 Content</h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </TabPanel>
        <TabPanel id="tab-3">
          <h3>Tab 3 Content</h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
        </TabPanel>
        <TabPanel id="tab-4">
          <h3>Tab 4 Content</h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </TabPanel>
      </TabContent>
    </Tabs>

    <div className="spacer"></div>
    <div className="spacer"></div>
    <div className="spacer"></div>


  </div>
}

export default App
