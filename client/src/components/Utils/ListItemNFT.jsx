import * as React from "react";
import { useState } from "react";

import { Grid, Typography, Paper, Divider, Box, Link } from "@mui/material";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

export default function AlignItemsList({ nft }) {
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
                alt="nft"
                style={{ width: "4em", height: "4em", borderRadius: "40%" }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container>
                <Grid item xs={12} md={12}>
                  <Typography variant="h6" fontWeight={"bold"}>
                    {nft.firstName}
                  </Typography>
                </Grid>
                <Divider />
                <Grid item xs={12} md={12}>
                  <Typography variant="body2">
                    {nft.Address} | {nft.propertytype} bhk | {nft.contactname}
                  </Typography>
                  <Typography variant="body2">
                    {nft.Description}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container>
                <Grid item xs={12} md={12} mt={"1.5em"} ml={"3em"}>
                  <InsertLinkIcon onClick={() => {
                    // console.log(nft._id)
                    localStorage.setItem("nft_id", nft._id);
                    window.location.href = "/dashboard/buy";
                  }}

                    style={{ cursor: "pointer" }}
                  ></InsertLinkIcon>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}
