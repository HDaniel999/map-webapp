import React, { Component } from 'react'
import { Layout } from 'antd';
import DisplayMap from './DisplayMap'

const {Content } = Layout;

class Map extends Component {

    constructor(props){
        super(props);
        this.state = {
            update: false,
        }
    }

    componentDidMount() {

    }

    componentWillMount() {
        
    }

    render() {
        return(
            <Content>
                <DisplayMap></DisplayMap>
            </Content>
        )
    }
  }

  export default Map