import React from 'react';
import './App.css';
import { Card } from 'antd';
import 'antd/dist/antd.css';

const tabList = [
  {
    key: 'tab1',
    tab: 'tab1',
  },
  {
    key: 'tab2',
    tab: 'tab2',
  },
];

function App() {
  return (
    <Card
      style={{ width: '100%' }}
      title="Card title"
      extra="More"
      tabList={tabList}
      defaultActiveTabKey="tab1"
    >
      IE9 test
    </Card>
  );
}

export default App;
