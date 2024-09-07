import React, { useState } from "react";
import "./sidebar.scss";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AirlineSeatFlatIcon from "@mui/icons-material/AirlineSeatFlat";
import AirIcon from "@mui/icons-material/Air";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { ExpandMore } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControlLabel,
  ListItem,
  ListItemButton,
  Slider,
} from "@mui/material";
import { FixedSizeList } from "react-window";

const Sidebar = ({ width, padding }) => {
  const sidebarStyle = {
    width: width || "300px",
    padding: padding || "20px",
  };
  // Bus Type State
  const [selectedBusType, setSelectedBusType] = useState([]);

  // Price Range State
  const [priceRange, setPriceRange] = useState([450, 3500]);

  // Dropdown Visibility States
  const [showBusPartner, setShowBusPartner] = useState(false);
  const [showBoardingPoint, setShowBoardingPoint] = useState(false);
  const [showDroppingPoint, setShowDroppingPoint] = useState(false);

  // Search States for each section
  const [busPartnerSearch, setBusPartnerSearch] = useState("");
  const [boardingPointSearch, setBoardingPointSearch] = useState("");
  const [droppingPointSearch, setDroppingPointSearch] = useState("");

  const busPartners = [
    "RedBus",
    "Volvo Bus",
    "Greenline Travels",
    "VRL Travels",
    "SRS Travels",
    "National Travels",
    "Orange Tours",
    "KPN Travels",
    "Sharma Transport",
    "Jabbar Travels",
  ];

  const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
  ];

  // Filter busPartner based on the search term
  const filteredBusPartners = busPartners.filter((partner) =>
    partner.toLowerCase().includes(busPartnerSearch.toLowerCase())
  );

  // Filter cities based on the search term
  const filteredBoardingPoints = cities.filter((city) =>
    city.toLowerCase().includes(boardingPointSearch.toLowerCase())
  );

  const filteredDroppingPoints = cities.filter((city) =>
    city.toLowerCase().includes(droppingPointSearch.toLowerCase())
  );

  const handleBusTypeClick = (busType) => {
    if (selectedBusType.includes(busType)) {
      setSelectedBusType(selectedBusType.filter((type) => type !== busType));
    } else {
      setSelectedBusType([...selectedBusType, busType]);
    }
  };

  const activeStyle = {
    color: "#e76a5e",
    border: "1px solid #e76a5e",
  };

  const valuetext = (value) => {
    return `${value} INR`;
  };

  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const toggleDropDown = (setValue) => {
    setValue((prevState) => !prevState);
  };

  const renderRow = (props, data) => {
    const { index, style } = props;
    const fontSize = "14px";
    const item = data[index];

    return (
      <ListItem
        style={{ ...style, position: "absolute" }}
        key={index}
        component="div"
        disablePadding
      >
        <ListItemButton style={{ display: "flex", left: "-25px" }}>
          <Checkbox
            sx={{
              "&.Mui-checked": {
                color: "#e76a5e",
              },
            }}
            id={`partner-checkbox-${index}`}
            style={{ transform: `scale(${parseFloat(fontSize) / 14})` }} // Adjust the padding for better alignment
            inputProps={{ "aria-label": `Partner ${index + 1}` }}
          />
          <label
            htmlFor={`partner-checkbox-${index}`}
            style={{ color: "#868585", margin: "0px", fontSize }}
          >
            {item}
          </label>
        </ListItemButton>
      </ListItem>
    );
  };

  return (
    <aside className="sidebar" style={sidebarStyle}>
      <div className="filter">
        <h4>Filters</h4>
        <div className="line_divider"></div>
        {/* Bus type */}
        <div className="filter_section bus_type_section">
          <label>Bus Type</label>
          <div className="bus-type-options">
            <div
              className="bus-type-option"
              onClick={() => handleBusTypeClick("AC")}
              style={selectedBusType.includes("AC") ? activeStyle : {}}
            >
              <AcUnitIcon />
              <span>AC</span>
            </div>
            <div
              className="bus-type-option"
              onClick={() => handleBusTypeClick("Sleeper")}
              style={selectedBusType.includes("Sleeper") ? activeStyle : {}}
            >
              <AirlineSeatFlatIcon />
              <span>Sleeper</span>
            </div>
            <div
              className="bus-type-option"
              onClick={() => handleBusTypeClick("NonAC")}
              style={selectedBusType.includes("NonAC") ? activeStyle : {}}
            >
              <AirIcon />
              <span>NonAC</span>
            </div>
            <div
              className="bus-type-option"
              onClick={() => handleBusTypeClick("Seater")}
              style={selectedBusType.includes("Seater") ? activeStyle : {}}
            >
              <EventSeatIcon />
              <span>Seater</span>
            </div>
          </div>
        </div>

        {/* Price Range */}
        <div className="filter_section">
          <label>Price Range</label>
          <Box className="price-slider-container">
            <Slider
              sx={{ color: "#e76a5e", width: "100%" }}
              getAriaLabel={() => "Price range"}
              value={priceRange}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              min={450}
              max={3500}
            />
          </Box>
        </div>

        {/* Departure Time */}
        <div className="filter_section departure_time_section">
          <label>Departure Time</label>
          <div className="departure_time_options">
            <div
              className="departure_time_option"
              onClick={() => handleBusTypeClick("Morning")}
              style={selectedBusType.includes("Morning") ? activeStyle : {}}
            >
              <WbSunnyIcon />
              <span>Before 10 AM</span>
            </div>
            <div
              className="departure_time_option"
              onClick={() => handleBusTypeClick("Afternoon")}
              style={selectedBusType.includes("Afternoon") ? activeStyle : {}}
            >
              <Brightness6Icon />
              <span>10 AM - 5 PM</span>
            </div>
            <div
              className="departure_time_option"
              onClick={() => handleBusTypeClick("Evening")}
              style={selectedBusType.includes("Evening") ? activeStyle : {}}
            >
              <WbSunnyIcon />
              <span>5 PM - 11 PM</span>
            </div>
            <div
              className="departure_time_option"
              onClick={() => handleBusTypeClick("Night")}
              style={selectedBusType.includes("Night") ? activeStyle : {}}
            >
              <NightsStayIcon />
              <span>After 11 PM</span>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="filter_section dropdown">
          <div className="dropdown_container">
            <label>Bus Partner</label>
            <ExpandMore
              className="dropdown_icon"
              onClick={() => toggleDropDown(setShowBusPartner)}
            />
          </div>
          {showBusPartner && (
            <div className="dropdown_content">
              <input
                type="text"
                placeholder="Search.."
                className="search_bar"
                value={busPartnerSearch}
                onChange={(e) => setBusPartnerSearch(e.target.value)}
              />
              {/* Virtualized list with checkboxes */}
              <FixedSizeList
                height={200}
                width={260}
                itemSize={46}
                itemCount={filteredBusPartners.length} // Adjust itemCount as needed
                overscanCount={5}
              >
                {(props) => renderRow(props, filteredBusPartners)}
              </FixedSizeList>
            </div>
          )}
        </div>
        <div className="filter_section dropdown">
          <div className="dropdown_container">
            <label>Boarding Point</label>
            <ExpandMore
              className="dropdown_icon"
              onClick={() => toggleDropDown(setShowBoardingPoint)}
            />
          </div>
          {showBoardingPoint && (
            <div className="dropdown_content">
              <input
                type="text"
                placeholder="Search.."
                className="search_bar"
                value={boardingPointSearch}
                onChange={(e) => setBoardingPointSearch(e.target.value)}
              />
              <FixedSizeList
                height={200}
                width={260}
                itemSize={46}
                itemCount={filteredBoardingPoints.length} // Adjust itemCount as needed
                overscanCount={5}
              >
                {(props) => renderRow(props, filteredBoardingPoints)}
              </FixedSizeList>
            </div>
          )}
        </div>
        <div className="filter_section dropdown">
          <div className="dropdown_container">
            <label>Dropping Point</label>
            <ExpandMore
              className="dropdown_icon"
              onClick={() => toggleDropDown(setShowDroppingPoint)}
            />
          </div>
          {showDroppingPoint && (
            <div className="dropdown_content">
              <input
                type="text"
                placeholder="Search.."
                className="search_bar"
                value={droppingPointSearch}
                onChange={(e) => setDroppingPointSearch(e.target.value)}
              />
              <FixedSizeList
                height={200}
                width={260}
                itemSize={46}
                itemCount={filteredDroppingPoints.length} // Adjust itemCount as needed
                overscanCount={5}
              >
                {(props) => renderRow(props, filteredDroppingPoints)}
              </FixedSizeList>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
