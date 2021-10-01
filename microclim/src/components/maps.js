import { MapContainer , TileLayer, FeatureGroup } from 'react-leaflet';
import { Component } from 'react';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import './css/leaflet.css';

class Maps extends Component {
  render(){
    
    const created = (e) => {
      //console.log(e);
      const {layerType, layer} = e;
      if (layerType==="rectangle"){
        var north = e.layer._bounds._northEast.lat
        var east = e.layer._bounds._northEast.lng
        var south = e.layer._bounds._southWest.lat
        var west =  e.layer._bounds._southWest.lng
        console.log(north,east,south,west)
      }
    }

    const edited = (e) => {
      console.log(e);
    }

    const deleted = (e) => {
      console.log(e);
    }

    return (
      <div className="">
        <MapContainer className="map" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <FeatureGroup>
            <EditControl position="topleft" onCreated={created} onEdited={edited} onDeleted={deleted} draw={{circle:false, marker:false, polygon:false, polyline:false}}/>
          </FeatureGroup>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* <Marker position={[51.505, -0.09]} icon={myIcon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker> */}
        </MapContainer>
      </div>
    );
  }
}

export default Maps;
