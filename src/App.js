import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "40edf2dd1e5c482285a21549181404";

 class App extends React.Component {
   state = {
    temperature: undefined,
    city: undefined,
    country: undefined,    
    condition: undefined,
    humidity: undefined,
    error: ""
   };

   getWeather = async (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const api_call = await fetch(`http://api.apixu.com/v1/current.json?key=${API_KEY}&q=${city},${country}`);
      const data = await api_call.json();      
      if(city && country){     
        this.setState({
          temperature: data.current.temp_f,
          city: data.location.name,
          country: data.location.country,
          condition: data.current.condition.text,
          humidity: data.current.humidity,
          error: ""
        });
      } else {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          condition: undefined,
          humidity: undefined,
          error: "Please enter a city and country"
        });
      }
    }
  render() {
    return (
      <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Titles />
              </div> 
              <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather} />
                <Weather 
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  condition={this.state.condition}
                  humidity={this.state.humidity}
                  error={this.state.error}
                  />
              </div>
            </div> 
          </div> 
        </div> 
      </div>        
      </div>
    )
  }
};

export default App;          


        