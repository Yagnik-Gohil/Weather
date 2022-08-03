import React from "react";
import logo from '..//images/logo.png';
import Parameters from "./Parameters";
import { UilMapMarker, UilTemperatureHalf, UilTemperatureEmpty,UilTemperature } from '@iconscout/react-unicons'
import SearchBar from "./SearchBar";
import {OpenWeatherApiUrl, OpenWeatherApiKey} from '../api/Api'

function Middle() {

  const handleSearchChange = (searchData) =>{
      
    const [ latitude, longitude] = searchData.value.split(" ");
      
      const currentWeatherData = fetch(`${OpenWeatherApiUrl}/weather?lat=${latitude}&lon=${longitude}&appid=${OpenWeatherApiKey}`)
      const forecastWeatherData = fetch(`${OpenWeatherApiUrl}/forecast?lat=${latitude}&lon=${longitude}&appid=${OpenWeatherApiKey}`)
         
  }

  return (
    <div className="col-md-7 col-sm-7 middle-col p-5">
      
      <div className="d-flex flex-column px-4">

        <SearchBar onSearchChange={handleSearchChange}></SearchBar>

        <div className="row dashboard shadow-sm p-3">
          <div className="col-md-8 my-2">
            <div className="row my-2">
              <div className="col-md-6 col-sm-6 text-center py-2">
                <div className="m-0 logo"><UilMapMarker size="30" color="#053742"/>Mumbai</div>
              </div>
              <div className="col-md-6 col-sm-6 text-center py-2">
                <div>
                  <p className="m-0">01-08-2022</p>
                  <p className="m-0">04:29 PM</p>
                </div>
              </div>
            </div>

            <div className="row my-2">
              <div className="col-md-12 text-center my-auto">
                <h1 className="m-0"><UilTemperatureHalf size="30" color="#053742"/>30°</h1>
                <h4 className="m-0">Clouds</h4>
                <p className="text-muted">overcast clouds</p>
              </div>
            </div>

            <div className="row my-2">
              <div className="col-md-6 col-sm-6 text-center py-2">
                <p className="my-auto"><UilTemperatureEmpty size="20" color="#053742" />Min temp: 29°</p>
              </div>
              <div className="col-md-6 col-sm-6 text-center py-2">
                <p className="my-auto"><UilTemperature size="20" color="#053742" /> Max temp: 32°</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 my-2 d-flex align-items-center justify-content-center px-0">
            <div className="row">
              <div className="col-md-12">
                <div className="weather-image-div">
                  <img
                    className="weather-image img-fluid"
                    src={logo}
                    alt="Clouds"
                  ></img>
                  {/* <UilCloudSun className="weather-image img-fluid" size="150" color="#053742"/> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row dashboard bg-blue shadow-sm">

          <Parameters></Parameters>
          
        </div>

      </div>

    </div>
  );
}

export default Middle;
