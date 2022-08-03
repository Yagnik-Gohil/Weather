import {React, useState} from "react";
import { Link } from 'react-router-dom'
import { UilApps, UilDashboard, UilChatBubbleUser, UilCloud } from '@iconscout/react-unicons'

function Left() {
  
  const [active, setActive] = useState(1);

  const tabs=[
    {
      id: 1,
      tabTitle: "Dashboard",
      LinkClass: "nav-item px-5 py-3",
      icon: "UilApps",
      to: "/"
    },
    {
      id: 2,
      tabTitle: "Air Pollution",
      LinkClass: "nav-item px-5 py-3",
      icon: "UilDashboard",
      to: "/airpollution"
    },
    {
      id: 3,
      tabTitle: "About",
      LinkClass: "nav-item px-5 py-3",
      icon: "UilChatBubbleUser",
      to: "/about"
    }
  ];
  function renderIcon(name) {
    switch(name) {
      case 'UilApps':
        return <UilApps size="25" color="#053742" />;
      case 'UilDashboard':
        return <UilDashboard size="25" color="#053742" />;
      case 'UilChatBubbleUser':
        return <UilChatBubbleUser size="25" color="#053742" />;
      default:
        return "⚪️";
    }
  }
  const NavLink = ({ id, tabTitle,LinkClass, isActive,icon,  to }) => {
    return (
      <Link className={isActive ? "active-tab "+LinkClass : LinkClass } to={to} onClick={() => setActiveTab(id)}>
          <p className="link-text m-0">
          {renderIcon(icon)} {tabTitle}
          </p>
        </Link>

    );
  };

  const setActiveTab = (id) => {
    
      setActive(id);
    
  };

  return (


    <div className="col-md-2 col-sm-2 p-0 pt-5">
      <div className="d-flex flex-column">
      <Link className="logo-item px-5 pb-3 logo" to="/" onClick={() => setActiveTab(1)}>
           <p className="link-text m-0">
             <span><UilCloud size="30" color="#053742" /></span> Weather
           </p>
         </Link>
        {
          tabs.map((item) => (
            <NavLink {...item} key={item.id}  isActive={active === item.id}  onClick={setActiveTab}></NavLink>
          ))
        }

        
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
