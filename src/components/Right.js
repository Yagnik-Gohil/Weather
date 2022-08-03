import React from "react";
import { Link } from "react-router-dom";
import { UilCalendarAlt, UilCloudSun, UilClouds } from '@iconscout/react-unicons'

function Right() {
  return (
    <div className="col-md-3 col-sm-3 p-0 pt-5">
      <div className="d-flex flex-column">
        <div className="logo-item px-5 pb-3 logo">
          <p className="link-text m-0 text-center">
            <span><UilCalendarAlt size="30" color="#053742" /> This Week</span>
          </p>
        </div>
        <Link className="nav-item px-5 py-3 active-tab" to="/">
          <p className="link-text m-0 d-flex justify-content-between">
            <span>Today</span><span>30° <UilCloudSun size="25" color="#053742" /></span>
          </p>
        </Link>
        <Link className="nav-item px-5 py-3" to="/">
          <p className="link-text m-0 d-flex justify-content-between">
            <span>Wednesday</span><span>30° <UilCloudSun size="25" color="#053742" /></span>
          </p>
        </Link>
        <Link className="nav-item px-5 py-3" to="/">
          <p className="link-text m-0 d-flex justify-content-between">
            <span>Thursday</span><span>30° <UilClouds size="25" color="#053742" /></span>
          </p>
        </Link>
        <Link className="nav-item px-5 py-3" to="/">
          <p className="link-text m-0 d-flex justify-content-between">
            <span>Friday</span><span>30° <UilCloudSun size="25" color="#053742" /></span>
          </p>
        </Link>
        <Link className="nav-item px-5 py-3" to="/">
          <p className="link-text m-0 d-flex justify-content-between">
            <span>Saturday</span><span>30° <UilClouds size="25" color="#053742" /></span>
          </p>
        </Link>
        <Link className="nav-item px-5 py-3" to="/">
          <p className="link-text m-0 d-flex justify-content-between">
            <span>Sunday</span><span>30° <UilCloudSun size="25" color="#053742" /></span>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Right;
