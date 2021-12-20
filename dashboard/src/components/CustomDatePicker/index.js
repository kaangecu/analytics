import React, { useState, useEffect } from "react";
import DateAdapter from "@mui/lab/AdapterLuxon";
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { DateTime } from "luxon";
import PropTypes from "prop-types";

const CustomDatePicker = ({ setSearchedDateTimes }) => {
  const [values, setValues] = useState({
    minDate: new Date(),
    maxDate: new Date(),
  });

  useEffect(() => {
    setSearchedDateTimes(values);
  }, [setSearchedDateTimes, values]);

  return (
    <div className="topbar-date_div">
      <button
        type="button"
        className="btn btn-primary topbar-date_div-item"
        onClick={() => {
          setValues({
            minDate: new Date(new Date().getTime() - 30 * 60000),
            maxDate: new Date(),
          });
        }}
      >
        Get Last 30 Mins
      </button>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DateTimePicker
          renderInput={(props) => (
            <TextField {...props} className="topbar-date_div-item" />
          )}
          label="Pick Minimum Date"
          value={values.minDate}
          onChange={(newValue) => {
            setValues({ ...values, minDate: newValue });
          }}
          maxDateTime={DateTime.now()}
        />
        <DateTimePicker
          renderInput={(props) => (
            <TextField {...props} className="topbar-date_div-item" />
          )}
          label="Pick Maximum Date"
          value={values.maxDate}
          onChange={(newValue) => {
            setValues({ ...values, maxDate: newValue });
          }}
          maxDateTime={DateTime.now()}
        />
      </LocalizationProvider>
    </div>
  );
};

export default CustomDatePicker;

CustomDatePicker.propTypes = {
  setSearchedDateTimes:PropTypes.func.isRequired
}