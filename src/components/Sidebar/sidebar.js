import React, { Component } from 'react';
import { Layout, Typography } from 'antd';
import CoordinateForm from '../Form/CoordinateForm'

import './sidebar.less'

const { Content, Footer } = Layout;

export default class Sidebar extends Component {


    render(){
        return(
          <div>
            <Content>
              <div className="site-layout-content">
                <img className="logo" src="/img/marker.svg" width="100px" alt="parco logo"/>
                <h1>Añade una nueva ubicación</h1>
                <CoordinateForm></CoordinateForm>
              </div>
              <Footer style={{ textAlign: 'center' }}>©2016-2020 Parco App. All rights reserved.</Footer>
            </Content>
          </div>
        )
    }
}