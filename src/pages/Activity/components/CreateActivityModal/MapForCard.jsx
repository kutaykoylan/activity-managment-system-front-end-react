import React, {useState} from "react";
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Map, Marker, Popup, TileLayer} from "react-leaflet";

Leaflet.Icon.Default.imagePath =
    '../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
const MapForCard = (props) => {
    const addMarker = (e) => {
        props.setMarkerHorizontal(e.latlng.lat);
        props.setMarkerVertical(e.latlng.lng)
    }

    const position = [props?.markerHorizontal, props?.markerVertical]
    return (
        <div>
            <Map center={position} zoom={10} style={{height: '200px'}} onClick={addMarker}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={position}>
                    <Popup>
                        <span>That will be the location of activity <br/> Have a good one!</span>
                    </Popup>
                </Marker>
            </Map>
        </div>
    );
}
/**
 * {markers.map((position, idx) =>
                    <Marker key={`marker-${idx}`} position={position}>
                        <Popup>
                            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
                        </Popup>
                    </Marker>
                )}
 */

export default MapForCard