import React, { Component } from 'react';

class Flat extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.selectFlat(this.props.name, this.props.lat, this.props.lng);
  }

  render() {
    const { name, imageUrl, price, priceCurrency, lat, lng } = this.props;
    const style = `background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl});`
    return (
      <div className={`card ${this.props.selected ? 'active' : ''}`} onClick={this.handleClick} style={ {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})`}}>
        <div className="card-category">
          <span>{ price }</span> <span>{ priceCurrency }</span>
        </div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;