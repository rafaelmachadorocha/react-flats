import React, { Component } from 'react';
import Flat from './flat.jsx';

class FlatList extends Component {

  render () {
    const { selectFlat, selectedFlat, flats } = this.props;
    return (
      <div className="flat-list">
        {flats.map((flat, index) => <Flat selectFlat={selectFlat} index={index} selected={flat.name === selectedFlat} key={flat.lat} name={flat.name} imageUrl={flat.imageUrl} price={flat.price} priceCurrency={flat.priceCurrency} lat={flat.lat} lng={flat.lng}/>)}
      </div>
    )
  }
}

export default FlatList;