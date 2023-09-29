import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Component } from 'react';
 
export class MapContainer extends Component {

  render() {
    return (
      <Map google={this.props.google} zoom={14}
      initialCenter={
        {
            lat:25.4567199,
            lng:81.8663148
        }
      }
      onClick={this.onMapClicked}
      
      >
          <Marker onClick={this.onMarkerClick}
  
    position={{lat: 25.4567199, lng: 81.8663148}} >
      

        </Marker>
        </Map>
 
      
 
        
      
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBv55p_Zji7NXaan0KR_yAQ-HO8PE0KIBI")
})(MapContainer)