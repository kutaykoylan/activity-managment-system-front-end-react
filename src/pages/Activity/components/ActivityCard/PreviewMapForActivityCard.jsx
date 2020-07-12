import React from "react";
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

const PreviewMapForActivityCard = (props) => {
    const position = [props.activityLocation.markerHorizontal, props.activityLocation.markerVertical]
    return (
        <div>
            <Map center={position} zoom={12} style={{height: '100px'}}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={position}>
                    <Popup>
                        <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
                    </Popup>
                </Marker>
            </Map>
        </div>
    );
}

export default PreviewMapForActivityCard