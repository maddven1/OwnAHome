import * as React from "react";
import { useState } from "react";

import axios from "axios";

import { Grid, Typography, Paper, Divider, Box, Button } from "@mui/material";



async function Approve(id) {
  let data = {
    id: id,
    approved: true,
  };
  const response = await axios.post(
    "http://localhost:4000/api/originator/update",
    data
  );
  if (response.status === 200) {
    console.log("success");
  } else {
    console.log("error");
  }
  window.location.reload();
}


export default function AlignPropertyList({ property }) {
  let [elev, setElev] = useState(3);

  return (
    <>
      <Grid container mt={"1em"}>
        <Paper
          elevation={elev}
          onMouseOver={() => {
            setElev(20);
          }}
          onMouseOut={() => {
            setElev(3);
          }}
          style={{ width: "100%", borderRadius: "2em" }}
        >
          <Grid container mt={"0.5em"}>
            <Grid item xs={12} md={0.5} />
            <Grid item xs={12} md={1}>
              <img
                src="/images/house.jpg"
                alt="property"
                style={{ width: "4em", height: "4em", borderRadius: "40%" }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container>
                <Grid item xs={12} md={12}>
                  <Typography variant="h6" fontWeight={"bold"}>
                    {property.firstName}
                  </Typography>
                </Grid>
                <Divider />
                <Grid item xs={12} md={12}>
                  <Typography variant="body2">
                    Address - {property.Address} | Type -{" "}
                    {property.propertytype} BHK | Area - {property.Area} SqFt
                  </Typography>
                  <Typography variant="body2">
                    {property.Description}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container>
                <Grid item xs={12} md={12} mt={"0.2em"} ml={"3em"}>
                  <Button
                    variant="outlined"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      Approve(property._id);
                    }}
                  >
                    approve?
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}
