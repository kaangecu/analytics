import React from "react";
import CustomDropdown from "../CustomDropdown/index";
import CustomDatePicker from "../CustomDatePicker/index";
import PropTypes from "prop-types";

const TopBar = ({ setSearchedAnalytic, setSearchedDateTimes }) => {
  return (
    <div id="topbar" className="topbar">
      <CustomDropdown setSearchedAnalytic={setSearchedAnalytic} />
      <CustomDatePicker setSearchedDateTimes={setSearchedDateTimes} />
    </div>
  );
};

export default TopBar;

TopBar.propTypes = {
  setSearchedDateTimes:PropTypes.func.isRequired,
  setSearchedAnalytic:PropTypes.func.isRequired
}