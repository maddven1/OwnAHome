import React from "react";
import { useState } from "react";

import { Grid, Paper, Typography, Link } from "@mui/material";

import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';

function MortgageProviderBox() {
  let [elev, setElev] = useState(3);

  return (
    <>
      <Link href="dashboard/buy" underline="none">
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
                <Typography variant="h4" component="h3" textAlign={"center"}>
                  Proceed as a Mortgage Provider
                </Typography>
              </Grid>

              <Grid item xs={12} md={12} mt={"2.5em"}>
                <MonetizationOnSharpIcon
                  sx={{ transform: "scale(4)" }}
                ></MonetizationOnSharpIcon>
              </Grid>

              <Grid item xs={12} mt={"2em"}>
                <Paper elevation={0}>
                  <Typography padding={"1em"} textAlign="center">
                    Would like some funds? Click me!!{" "}
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

export default MortgageProviderBox;
