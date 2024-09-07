import { useState, useEffect } from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import HotelIcon from "@mui/icons-material/Hotel";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import NightsStayIcon from "@mui/icons-material/NightsStay"; // Nighttime
import Brightness4Icon from "@mui/icons-material/Brightness4";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Amenities } from "./data";
import { Drawer } from "antd";
import Sidebar from "./Sidebar";
import "./sideFooter.scss";

const SideFooter = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const showToggleSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeToggleSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleResize = () => {
    if (window.innerWidth > 992) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const AmenitiesIcons = {
    AC: <AcUnitIcon />,
    Sleeper: <LocalFireDepartmentIcon />,
    NonAC: <HotelIcon />,
    Seater: <AirlineSeatReclineNormalIcon />,
    Daytime: <Brightness4Icon />,
    NightTime: <NightsStayIcon />,
  };
  return (
    <>
      <div className="res-nav">
        <Sidebar />
      </div>
      <div className="res-sidebar">
        <div className="amenities-list">
          {Object.entries(Amenities).map(([key, value]) => (
            <button key={key} className="amenities-button">
              {AmenitiesIcons[key]}
              <span className="amenities-val">{value}</span>
            </button>
          ))}
        </div>
        <div className="res-filter">
          <button className="filter-button" onClick={showToggleSidebar}>
            <FilterListIcon className="filter-icon" />
            <span className="filter-text">Sort & Filter</span>
          </button>
        </div>
        <Drawer
          title="Filters"
          placement="right"
          onClose={closeToggleSidebar}
          visible={isSidebarOpen}
          width={470}
          classNames={{ content: "shweta-patel" }}
        >
          <Sidebar width={450} padding={20} />
          <button className="nav-btn">Reset</button>
        </Drawer>
      </div>
    </>
  );
};

export default SideFooter;
