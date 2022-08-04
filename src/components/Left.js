import { React } from "react";
import { Link, NavLink, useMatch } from "react-router-dom";
import { UilApps, UilDashboard, UilChatBubbleUser, UilCloud, } from "@iconscout/react-unicons";

function Left() {
  
  const dashboardMap = useMatch("/dashboard/:date");
  const airPollutionMap = useMatch("/airpollution/:date")

  // console.log(dashboardMap)
  // console.log(airPollutionMap)

  let defaultDashboard = "/dashboard/" +  new Date().toLocaleDateString().replace(/\//g,"")
  let defaultAirPollution = "/airpollution/" +  new Date().toLocaleDateString().replace(/\//g,"")

  const tabs = [
    {
      id: 1,
      tabTitle: "Dashboard",
      icon: "UilApps",
      to: dashboardMap == null ? defaultDashboard : dashboardMap.pathname,
    },
    {
      id: 2,
      tabTitle: "Air Pollution",
      icon: "UilDashboard",
      to: airPollutionMap == null ? defaultAirPollution : airPollutionMap.pathname,
    },
    {
      id: 3,
      tabTitle: "About",
      icon: "UilChatBubbleUser",
      to: "/about",
    },
  ];
  function renderIcon(name) {
    switch (name) {
      case "UilApps":
        return <UilApps size="25" color="#053742" />;
      case "UilDashboard":
        return <UilDashboard size="25" color="#053742" />;
      case "UilChatBubbleUser":
        return <UilChatBubbleUser size="25" color="#053742" />;
      default:
        return "⚪️";
    }
  }
  const NavBar = ({ tabTitle, icon, to }) => {
    return (
      <NavLink className="nav-item px-5 py-3" to={to}>
        <p className="link-text m-0">
          {renderIcon(icon)} {tabTitle}
        </p>
      </NavLink>
    );
  };

  return (
    <div className="col-md-2 col-sm-2 p-0 pt-5">
      <div className="d-flex flex-column">
        <Link className="logo-item px-5 pb-3 logo" to={defaultDashboard}>
          <p className="link-text m-0">
            <span>
              <UilCloud size="30" color="#053742" />
            </span>{" "}
            Weather
          </p>
        </Link>
        {tabs.map((item) => (
          <NavBar {...item} key={item.id}></NavBar>
        ))}
      </div>
    </div>
  );
}
// function Left() {
//   return (
//     <div className="col-md-2 col-sm-2 left-col p-0 pt-5">
//       <div className="d-flex flex-column">
//         <Link className="logo-item px-5 pb-3 logo" to="/">
//           <p className="link-text m-0">
//             <span>🌎</span> Weather
//           </p>
//         </Link>
//         <Link className="nav-item px-5 py-3 active-tab" to="/">
//           <p className="link-text m-0">
//             <span>📊</span> Dashboard
//           </p>
//         </Link>
//         <Link className="nav-item px-5 py-3" to="/">
//           <p className="link-text m-0">
//             <span>💨</span> Air Pollution
//           </p>
//         </Link>
//         <Link className="nav-item px-5 py-3" to="/about">
//           <p className="link-text m-0">
//             <span>🌐</span> About
//           </p>
//         </Link>
//       </div>
//     </div>
//   );
// }

export default Left;
