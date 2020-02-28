import React, { useState, useRef } from 'react';
import useSwr from 'swr';
import GoogleMapReact from 'google-map-react';
import useSupercluster from 'use-supercluster';
import InfoLocation from '../../components/InfoView/InfoLocation'

import './DisplayMap.less'

const fetcher = (...args) => fetch(...args).then(response => response.json());
const Marker = ({ children }) => children;

export default function DisplayMap() {

    const [isShown, setIsShown] = useState(false);

    // Map Setup
    const mapRef = useRef();
    const [zoom, setZoom] = useState(10);
    const [bounds, setBounds] = useState(null);

    // Load and format api data
    const url = "https://parcomap-api.herokuapp.com/api/coordinate";
    const {data, error} = useSwr(url, { fetcher });
    const places = data && !error ? data.coordinate : [];
    const result = places.map(place => place)
    const points = result.map(result => ({
    type: "Feature",
    properties: { 
        cluster: false, 
        placeId: result._id, 
        category: 'crime.category'
    },
    geometry: {
        type: "Point",
        coordinates: [
        parseFloat(parseFloat(result.lng.$numberDecimal)),
        parseFloat(parseFloat(result.lat.$numberDecimal))
        ]
    }
    }));


    // Get clusters
    const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 }
    });

    return(
            <div style={{ height: '100vh', width: '100%'}}>
                <GoogleMapReact 
                bootstrapURLKeys={{key: 'AIzaSyBkSlCUewwZLKM34Z9n8xqWV1QomzitobQ' }}
                //to do: center map by intial lat and lng values should be averaged from all coordinates
                defaultCenter={{lat: 21.33635, lng: -101.85834}}
                defaultZoom={6}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map }) => {
                    mapRef.current = map;
                }}
                onChange={({ zoom, bounds }) => {
                    setZoom(zoom);
                    setBounds([
                    bounds.nw.lng,
                    bounds.se.lat,
                    bounds.se.lng,
                    bounds.nw.lat
                    ]);
                }}
                >
                {clusters.map(cluster => {
                    const [longitude, latitude] = cluster.geometry.coordinates;
                    const {
                    cluster: isCluster, 
                    point_count: pointCount
                    }= cluster.properties;
                    
                    if (isCluster) {
                    return(
                        <Marker 
                        key={cluster.id} 
                        lat={latitude} 
                        lng={longitude}
                        >
                        <div 
                            className='cluster-marker'
                            style={{
                            width: `${10 + (pointCount / points.length) * 20}px`,
                            height: `${10 + (pointCount / points.length) * 20}px`
                            }}  
                            onClick={() => {
                            const expansionZoom = Math.min(
                                supercluster.getClusterExpansionZoom(cluster.id),
                                20
                            );
                            mapRef.current.setZoom(expansionZoom);
                            mapRef.current.panTo({ lat: latitude, lng: longitude});
                            }}
                        >
                            {pointCount}
                        </div>
                        </Marker>
                    )
                    }

                    return(
                    <Marker 
                        key={`place-${cluster.properties.placeId}`}
                        lat={latitude} 
                        lng={longitude}
                    >

                        <button 
                        id="marker"
                        className="place-marker"
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                        onClick={() => {
                            mapRef.current.setZoom(12);
                            mapRef.current.panTo({ lat: latitude, lng: longitude});
                            setIsShown(true);
                        }}
                        >
                            <img src="img/marker.svg" alt=""/>
                        </button>
                        {isShown && (<InfoLocation lat={latitude} lng={longitude} />)}

                    </Marker>  
                    );

                })}
                </GoogleMapReact>
            </div>
    )
}