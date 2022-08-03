import React from 'react'
import { UilNA } from '@iconscout/react-unicons'

function AirPollution() {
  return (
    <div className="col-md-7 col-sm-7 middle-col p-5">
      
      <div className="d-flex flex-column px-4">

        <div className="row dashboard bg-blue text-white shadow-sm p-3">
            <div className="d-flex justify-content-between">
                <h5 className="m-0">Air Quality index: 1 (Good)</h5><p className="m-0">02-08-2022 - 04:33 PM</p>
            </div>
        </div>

        <div className="row dashboard shadow-sm p-5 bg-light">
            <div className="aqi-items col-sm-6 p-2 col-md-3 text-center">
                <h4>220.3</h4><h6>μg/m<sup>3</sup></h6>
                <p className="my-2">CO</p>
            </div>
            <div className="aqi-items col-sm-6 p-2 col-md-3 text-center">
                <h4>0.09</h4><h6>μg/m<sup>3</sup></h6>
                <p className="my-2">NO</p>
            </div>
            <div className="aqi-items col-sm-6 p-2 col-md-3 text-center">
                <h4>2.87</h4><h6>μg/m<sup>3</sup></h6>
                <p className="my-2">NO<sub>2</sub></p>
            </div>
            <div className="aqi-items col-sm-6 p-2 col-md-3 text-center">
                <h4>46.49</h4><h6>μg/m<sup>3</sup></h6>
                <p className="my-2">O<sub>3</sub></p>
            </div>
            <div className="aqi-items col-sm-6 p-2 col-md-3 text-center">
                <h4>3.22</h4><h6>μg/m<sup>3</sup></h6>
                <p className="my-2">SO<sub>2</sub></p>
            </div>
            <div className="aqi-items col-sm-6 p-2 col-md-3 text-center">
                <h4>0.57</h4><h6>μg/m<sup>3</sup></h6>
                <p className="my-2">NH<sub>3</sub></p>
            </div>
            <div className="aqi-items col-sm-6 p-2 col-md-3 text-center">
                <h4>5.19</h4><h6>μg/m<sup>3</sup></h6>
                <p className="my-2">PM<sub>2.5</sub></p>
            </div>
            <div className="aqi-items col-sm-6 p-2 col-md-3 text-center">
                <h4><UilNA size="30" color="#053742"/></h4><h6>μg/m<sup>3</sup></h6>
                <p className="my-2">PM<sub>10</sub></p>
            </div>
            
        </div>

        <div className="row dashboard shadow-sm p-3">
            <p className="m-0">Please follow <a className="link-item" href="https://en.wikipedia.org/wiki/Air_quality_index#CAQI" target="/blank">this</a> link to learn more about calculation of Air Quality index.</p>
            
        </div>
        

      </div>

    </div>
  )
}

export default AirPollution