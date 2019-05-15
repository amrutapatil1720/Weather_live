import React from 'react';
import "./introduction.css"
class Form extends React.Component {
  render() {
    return (
      <div className="form-align">
        <div>
         <h1>Weather Forcast</h1>
         <p>"Weather Forecast" lets you interact with the real weather.</p>
        </div>
        <form onSubmit={this.props.getWeather}>
    <input type="text" name="city" placeholder="city..."/>
    <input type="text" name="country" placeholder="country..."/>
    <button className="btn">Get Weather</button>
    </form>
</div>

    );
  }
}

export default Form;
