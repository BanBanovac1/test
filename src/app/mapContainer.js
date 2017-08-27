import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';




export class Container extends React.Component {
  render() {
    const style = {
      position: 'absolute',
      zIndex: '2',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px'  
 
    }
    return (
     
        <Map
        style={style}
        google={this.props.google}
        initialCenter={{
            lat: 43.507762,
            lng: 16.438505
          }}/>
    )

  }
}

let key = 'AIzaSyD8i8YIb5h0Ri_jSXNEuB6Z1xGcYB7PWJM';
export default GoogleApiWrapper({
  apiKey: key
})(Container)