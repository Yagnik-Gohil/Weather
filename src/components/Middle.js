import React from "react";
import logo from '..//images/logo.png';

function Middle() {
  return (
    <div className="col-md-7 col-sm-7 middle-col p-5">
      <div className="d-flex flex-column px-4">
        <input
          type="email"
          className="form-control"
          placeholder="Search City"
        />

        <div className="row dashboard shadow-sm p-3">
          <div className="col-md-8 my-2">
            <div className="row my-2">
              <div className="col-md-6 col-sm-6 text-center py-2">
                <div className="m-0 logo">📍 Mumbai</div>
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
                <h1 className="m-0">30°</h1>
                <h4 className="m-0">Clouds</h4>
                <p className="text-muted">overcast clouds</p>
              </div>
            </div>

            <div className="row my-2">
              <div className="col-md-6 col-sm-6 text-center py-2">
                <p className="my-auto">Min temp: 29°</p>
              </div>
              <div className="col-md-6 col-sm-6 text-center py-2">
                <p className="my-auto">Max temp: 32°</p>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middle;
