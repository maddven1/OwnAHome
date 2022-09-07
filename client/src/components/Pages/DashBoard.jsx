import React from "react";
import { Grid } from "@mui/material";

import NavBar from "../Utils/NavBar";
import SpeculatorBox from "../Utils/Speculator";
import OriginatorBox from "../Utils/Originator";
import CommunityCoachBox from "../Utils/CommunityCoach";
import BrokerBox from "../Utils/Broker";
import MortgageProviderBox from "../Utils/MortgageProvider";
import GuestBox from "../Utils/Guest";

import {
  isMetaMaskConnected,
  isMetaMaskInstalled,
  initialiseMetamask,
  getAccount,
} from "../../hooks/metamask.jsx";

function DashBoard() {
  return (
    <>
      <NavBar />
      <Grid container mt={"2em"}>
        <Grid item xs={12} md={1} />
        <Grid item xs={12} md={3} alignItems="center" alignContent={"center"}>
          <SpeculatorBox />
        </Grid>
        <Grid item xs={12} md={0.5} />
        <Grid item xs={12} md={3} alignItems="center" alignContent={"center"}>
          <OriginatorBox />
        </Grid>
        <Grid item xs={12} md={0.5} />
        <Grid item xs={12} md={3} alignItems="center" alignContent={"center"}>
          <CommunityCoachBox />
        </Grid>
        <Grid item xs={12} md={1} />

        <Grid item xs={12} md={12} mt={"2em"} />

        <Grid item xs={12} md={1} />
        <Grid item xs={12} md={3} alignItems="center" alignContent={"center"}>
          <BrokerBox />
        </Grid>
        <Grid item xs={12} md={0.5} />
        <Grid item xs={12} md={3} alignItems="center" alignContent={"center"}>
          <MortgageProviderBox />
        </Grid>
        <Grid item xs={12} md={0.5} />
        <Grid item xs={12} md={3} alignItems="center" alignContent={"center"}>
          <GuestBox />
        </Grid>
        <Grid item xs={12} md={1} />

        <Grid item xs={12} md={12} mt={"2em"} />
      </Grid>
    </>
  );
}

export default DashBoard;
