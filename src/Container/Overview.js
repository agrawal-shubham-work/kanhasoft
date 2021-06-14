import { Fab, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Charts } from "../component/Chart/Chart";
import { SportActivityTable } from "../component/Table/SportActivityTable";
import "./Overview.css";

export const Overview = () => {
  const history = useHistory();

  const data = useSelector((state) => state.overview.pieChartData);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="mainOverviewContainer">
      <Grid container className="overview-content-container">
        <Grid item xs={12} md={5} className="childOverviewContainer">
          <span className="formTitle">Sports Vs Students PieChart</span>

          <Charts />
        </Grid>
        <Grid item xs={12} md={7} className="childOverviewContainer">
          <span className="formTitle">Sports Vs Students Table</span>
          <SportActivityTable />
        </Grid>
      </Grid>
      <div className="fabContainer">
        <span className="fabLabel">Add New Student Data</span>
        <Fab
          color="primary"
          aria-label="add"
          onClick={(event) => {
            event.preventDefault();
            history.push("/newData");
          }}
        >
          <AddIcon />
        </Fab>
      </div>
      <div
        style={{
          backgroundColor: "#e4eaf1",
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: -128998,
        }}
      />
    </div>
  );
};
