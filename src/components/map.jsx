import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker.jsx';

class SimpleMap extends Component {
  center() {
    if (this.props.lat && this.props.lng) {
      return {
        lat: this.props.lat,
        lng: this.props.lng
      };
    }
  }

  render() {
    if (this.props.lat && this.props.lng) {
      return (
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
            <Marker lat={this.props.lat} lng={this.props.lng} />
          </GoogleMapReact>
        </div>
      );
    }
    return (
      <div className="map-container" />
    );
  }
}

export default SimpleMap;
