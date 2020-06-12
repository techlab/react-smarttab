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
  const [tabSettings, updateTabSettings] = useState({
    selectedTab:"tab-1",
    theme:'default',
    vertical:false,
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
            <option value="bstabs">Bootstrap Tabs</option>
            <option value="bspills">Bootstrap Pills</option>
            <option value="github">GitHub</option>
            <option value="sourceforge">Sourceforge</option>
      </select>

      &nbsp;&nbsp;&nbsp;&nbsp;
      <input type="checkbox" id="is_vertical" checked={tabSettings.vertical} onChange={(e) => updateTabSettings(Object.assign({}, tabSettings, {vertical:e.target.checked}))} />
      <label htmlFor="is_vertical">Vertical</label>

      &nbsp;&nbsp;&nbsp;&nbsp;
      <input type="checkbox" id="is_justified" checked={tabSettings.justified} onChange={(e) => updateTabSettings(Object.assign({}, tabSettings, {justified:e.target.checked}))} />
      <label htmlFor="is_justified">Justified</label>
    </p>
    <br />


    <Tabs
      theme={tabSettings.theme}
      orientation={tabSettings.vertical ? 'vertical' : 'horizontal'}
      justified={tabSettings.justified.toString()}
      >
      <TabNav>
        <TabNavItem tab="tab-1"><strong>Tab 1</strong> This is tab description</TabNavItem>
        <TabNavItem tab="tab-2"><strong>Tab 2</strong> This is tab description</TabNavItem>
        <TabNavItem tab="tab-3"><strong>Tab 3</strong> This is tab description</TabNavItem>
        <TabNavItem tab="tab-4"><strong>Tab 4</strong> This is tab description</TabNavItem>
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

  </div>
}

export default App
