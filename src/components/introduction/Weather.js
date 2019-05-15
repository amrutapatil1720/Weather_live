import React from 'react';
import "./introduction.css"

class Weather extends React.Component {
  render() {
    return (
      <div>


      {this.props.city && this.props.country && <p className="data">Location :{this.props.city}, {this.props.country} </p>}
  { /*if this.props.city===true and this.props.country=true only then return location */}
      {this.props.temperature && <p className="data">Temperature :{this.props.temperature} </p>}
      {this.props.humidity && <p className="data">Humidity:{this.props.humidity} </p>}
      {this.props.description && <p className="data">Description :{this.props.description}</p>}
      {this.props.error && <p className="data">error : {this.props.error}</p>}

      </div>
    );
  }
}

export default Weather;
