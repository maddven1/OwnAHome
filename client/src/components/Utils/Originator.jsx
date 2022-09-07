import React from "react";
import { useState } from "react";

import { Grid, Paper, Typography, Link } from "@mui/material";

import HouseSharpIcon from '@mui/icons-material/HouseSharp';

function OriginatorBox() {
  let [elev, setElev] = useState(3);

  return (
    <>
      <Link href="dashboard/OriginatorPage" underline="none">
        <Grid container>
          <Paper
            elevation={elev}
            onMouseOver={() => {
              setElev(20);
            }}
            onMouseOut={() => {
              setElev(3);
            }}
          >
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: "20em", width: "30em" }}
            >
              <Grid item mt={"1em"}>
                <Typography variant="h4" component="h3">
                  Proceed as a Originator
                </Typography>
              </Grid>

              <Grid item xs={12} md={12} mt={"2.5em"}>
                <HouseSharpIcon
                  sx={{ transform: "scale(4)" }}
                ></HouseSharpIcon>
              </Grid>

              <Grid item xs={12} mt={"2em"}>
                <Paper elevation={0}>
                  <Typography padding={"1em"} textAlign="center">
                    Would like to fractionalise your property on chain? Click
                    me!!
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Link>
    </>
  );
}

export default OriginatorBox;
