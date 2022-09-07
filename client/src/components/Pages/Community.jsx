import axios from "axios";
import React, { Component } from "react";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";

import NavBar from "../Utils/NavBar";

import AlignPropertyList from "../Utils/ListItemProperties";
import {
  isMetaMaskInstalled,
  isMetaMaskConnected,
  initialiseMetamask,
  getAccount,
} from "../../hooks/metamask.jsx";

initialiseMetamask();

export default class CommunityCoach extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      authorized: false,
      isLoading: true,
    };
  }

  async componentDidMount() {
    const d = {
      Address: getAccount(),
    };

    const response2 = await axios.post(
      "http://localhost:4000/api/manager/auth",
      d
    );

    if (response2.status === 200) {
      this.setState({ authorized: true });
    } else {
      this.setState({ authorized: false });
      this.setState({ isLoading: false });
    }
    if (this.state.authorized) {
      const data = { type: "pending" };
      const response = await axios.post(
        "http://localhost:4000/api/originator/",
        data
      );
      if (response.status === 200) {
        this.setState({ properties: response.data });
        this.setState({ isLoading: false });
      } else {
        console.log("error");
      }
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <>
          <NavBar />
          <Box sx={{ display: "flex", justifyContent: "center", mt: "20em" }}>
            <CircularProgress size={100} />
          </Box>
        </>
      );
    } else if (this.state.authorized) {
      if (this.state.properties.length === 0) {
        return (
          <>
            <NavBar />
            <Grid container>
              <Grid item xs={12} md={2} />
              <Grid item xs={12} md={8}>
                <Box
                  sx={{ display: "flex", justifyContent: "center", mt: "10em" }}
                >
                  <Typography variant="h6" fontWeight={"bold"}>
                    No new Properties for approval Found
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={2} />
            </Grid>
          </>
        );
      } else {
        return (
          <>
            <NavBar />
            <Grid container>
              <Grid item xs={12} md={2} />
              <Grid item xs={12} md={8}>
                {this.state.properties.map((property, i) => (
                  <AlignPropertyList property={property} key={i} />
                ))}
              </Grid>
              <Grid item xs={12} md={2} />
            </Grid>
          </>
        );
      }
    } else {
      return (
        <>
          <NavBar />
          <Grid container>
            <Grid item xs={12} md={2} />
            <Grid item xs={12} md={8}>
              <Box
                sx={{ display: "flex", justifyContent: "center", mt: "10em" }}
              >
                <Typography variant="h4" fontWeight={"bold"}>
                  You are not authorized to view this page!!!!
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={2} />
          </Grid>
        </>
      );
    }
  }
}
