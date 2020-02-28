import React, { Component } from 'react';
import InfoLocation from './InfoLocation'

import './InfoView.less';

class InfoView extends Component {

    constructor(props){
        super(props);
        this.state={
            lat: '',
            lng: ''
        }
    }

    render() {

        console.log(this.props)
        return(
            <div className="infoView">
                <div className="infoView-text">
                    <img src="" alt=""/>
                    <h1>Title</h1>
                    <InfoLocation lat={this.props.lat} lng={this.props.lng}/>
                </div>
            </div>
        );
    }
}

export default InfoView;