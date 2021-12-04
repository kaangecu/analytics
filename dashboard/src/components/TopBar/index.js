import React from "react";
import CustomDropdown from "../CustomDropdown/index";
import CustomDatePicker from "../CustomDatePicker/index";

const TopBar = ({ setSearchedAnalytic,setSearchedDateTimes }) => {
  return (
    <div className="topbar">
      <CustomDropdown setSearchedAnalytic={setSearchedAnalytic} />
      <CustomDatePicker setSearchedDateTimes={setSearchedDateTimes}/>
    </div>
  );
};

export default TopBar;
