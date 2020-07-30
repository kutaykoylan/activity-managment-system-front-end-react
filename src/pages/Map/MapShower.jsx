import React, {useEffect, useState} from 'react'
import {Map, Marker, Popup, TileLayer, withLeaflet} from 'react-leaflet'
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {ActivityAPIHelper} from "../../helpers/APIHelpers/ActivityAPI";

Leaflet.Icon.Default.imagePath =
    '../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


const MapShower = () => {
    const [activities, setActivities] = useState([]);
    //  const [markers,setMarkers]=useState([]);
    console.log(ActivityAPIHelper.accessToken)
    const getAll = async () => {
        const response = await ActivityAPIHelper.getAllActivities();
        console.log(response)
        if (response !== null)
            setActivities(response?.data);
    }
    useEffect(() => {
        async function getAllOfThem() {
            const response = await getAll();
        }

        getAllOfThem();
    }, []);
    return (
        <div>
            <Map center={[41.015137, 28.979530]} zoom={10} style={{height: '800px'}}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                {typeof activities !== 'undefined' &&
                activities.map((element, idx) =>
                    <Marker key={`marker-${idx}`} position={[element.locationLat, element.locationLng]}>
                        <Popup>
                            <span className="col-4">
                                <p className="d-flex justify-content-start m-0 p-0">
                                    Activite
                                </p>
                                <hr/>
                                <p className="d-flex justify-content-start m-0 p-0">
                                   Title : {element.title}
                                </p>
                                <hr/>
                                   <p className="d-flex justify-content-start m-0 p-0">
                                  Details : {element.details}
                                </p>
                                <hr/>
                                 <p className="d-flex justify-content-start m-0 p-0">
                                  Start date : {element.startDate}
                                     &nbsp;&nbsp;&nbsp;&nbsp;
                                  End date   : {element.endDate}
                                 </p>
                            </span>
                        </Popup>
                    </Marker>
                )}
            </Map>
        </div>
    );
}
export default MapShower;