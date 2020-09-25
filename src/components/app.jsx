import React, { Component } from 'react';
import FlatList from './flat_list.jsx';
import flats from '../../data/flats.js';
import SimpleMap from './map.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedFlat: `${flats[0].name}`,
      lat: flats[0].lat,
      lng: flats[0].lng,
    }
  }

  selectFlat = (name, lat, lng) => {  
    this.setState({ selectedFlat: name, lat: lat, lng: lng });
  }

  render() {
    return (
      <div className="App">
        <FlatList selectFlat={this.selectFlat} selectedFlat={this.state.selectedFlat} flats={flats} />
        <SimpleMap lat={this.state.lat} lng={this.state.lng}/>
      </div>
    )
  }
}

export default App;