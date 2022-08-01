import React from "react";

function Left() {
  return (
    <div className="col-md-2 col-sm-2 left-col p-0 pt-5">
      <div className="d-flex flex-column">
        <div className="px-5 pb-3 logo">
          <p className="link-text m-0">
            <span>🌎</span> Weather
          </p>
        </div>
        <div className="nav-item px-5 py-3 active-tab">
          <p className="link-text m-0">
            <span>📊</span> Dashboard
          </p>
        </div>
        <div className="nav-item px-5 py-3">
          <p className="link-text m-0">
            <span>💨</span> Air Pollution
          </p>
        </div>
        <div className="nav-item px-5 py-3">
          <p className="link-text m-0">
            <span>🌐</span> About
          </p>
        </div>
      </div>
    </div>
  );
}

export default Left;
