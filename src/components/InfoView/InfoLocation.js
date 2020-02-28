import React from 'react';
import Geocode from 'react-geocode';

import './InfoView.less';

export default function InfoLocation(props) {

    Geocode.setApiKey("AIzaSyBkSlCUewwZLKM34Z9n8xqWV1QomzitobQ");
    Geocode.setLanguage("es");
    Geocode.setRegion("mx");
    Geocode.enableDebug();

    function getLocation() {
        return Geocode.fromLatLng(props.lat, props.lng)
            .then(response => response.results[0].formatted_address)
    }

    const location = getLocation()

    location.then(result => {console.log(result)})

    return(
        <div className="infoView">
            <div className="infoView-text">
                <img src="" alt=""/>
                <h1>Title</h1>
                <p>Description...</p>
                <p style={{fontSize: '9px'}}>{props.lat},{props.lng}</p>
            </div>
        </div>
    )
}