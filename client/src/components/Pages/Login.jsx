import React from "react";

import { Grid, Paper, Typography } from "@mui/material";

import NavBar from "../Utils/NavBar.jsx";
import ConnectBox from "../Utils/ConnectBox.jsx";
import GraphBox from '../Utils/GraphBox.jsx'

import {
  isMetaMaskConnected,
  isMetaMaskInstalled,
  initialiseMetamask,
  getAccount,
} from "../../hooks/metamask.jsx";


await initialiseMetamask();

function Login() {
  return (
    <>
      <NavBar />
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
        mt={"10em"}
      >
        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={12} md={3} alignItems="center" alignContent={"center"}>
          <ConnectBox />
        </Grid>
        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={12} md={5}>
          <Paper elevation={3}>
            <Typography variant="h4" align="center" fontWeight={"Bold"}>
              Capital Locked
            </Typography>
            
            <GraphBox />
            
          </Paper>
        </Grid>

        <Grid item xs={12} md={1}></Grid>
      </Grid>
    </>
  );
}

export default Login;
