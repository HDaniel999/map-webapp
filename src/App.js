import React from 'react';
import { Row, Col, Layout } from 'antd';
import Sidebar from './components/Sidebar/sidebar';
import Map from './components/Map/Map'
import './App.css';


export default function App() {

  // Render map
  return (
    <div className="App">

    <Layout>
      <Row>
        <Col xs={24} sm={24} md={8} lg={6} xl={6}>
          <Sidebar></Sidebar>
        </Col>
        <Col xs={24} sm={24} md={16} lg={18} xl={18}>
          <Map></Map>
        </Col>
      </Row>
    </Layout>

    </div>
  );
}
