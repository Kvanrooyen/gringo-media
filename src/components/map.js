import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


const DublinMap = () => {
    const dublinPosition = [53.3498, -6.2603]; // Latitude and Longitude for Dublin

    // Custom minimal dark style
    const mapStyle = {
        height: '400px',
        width: '100%',
        filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)',
    };

    return (
        <div className="map-container">
            <MapContainer center={dublinPosition} zoom={13} style={mapStyle} zoomControl={false}>
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                />
                <Marker position={dublinPosition}>
                    <Popup>
                        Dublin, Ireland
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default DublinMap;