import React from "react";


const Weather = props => (
  <div className="weather__info">
      {
        props.city && props.state && <p className="weather__key">Location: 
          <span className="weather__value"> {props.city}, {props.state}</span>
        </p>
      }
      {
        props.temperature && <p className="weather__key">Temperature: 
          <span className="weather__value"> {props.temperature} F</span>
        </p>
      }
      {
        props.condition && <p className="weather__key">Condition: 
          <span className="weather__value"> {props.condition}</span>
        </p>
      }
      {
        props.humidity && <p className="weather__key">Humidity: 
          <span className="weather__value"> {props.humidity} %</span>
        </p>
      }       
      {
        props.error && <p className="weather__error"> {props.error}</p>
      }
    </div>
);



export default Weather;