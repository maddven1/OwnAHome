import React, { Component } from "react";
import axios from "axios";
import NavBar from "../Utils/NavBar";

import {
  Grid,
  TextField,
  Avatar,
  ThemeProvider,
  createTheme,
  Container,
  CssBaseline,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: null,
      access_token: null,
      refreshToken: null,
      user_details: null,
      accounts: null,
      isLoading: true,
    };
  }

  async componentDidMount() {
    let url = new URL(window.location.href);
    this.state.code = url.searchParams.get("code"); // get the code from the url
    this.setState({ code: this.state.code });

    await this.getUserDetails();
    await this.getAccounts();
    this.setState({ isLoading: false });
  }

  async getCode() {
    const clientID =
      "22d5c636691caf290dc147258708f711f26ac987aac69e052544764fbd3be107";
    const redirectURI = encodeURI("http://localhost:3000/profile");

    let Authorize_URL = `https://www.coinbase.com/oauth/authorize?response_type=code&client_id=${clientID}&redirect_uri=${redirectURI}&state=134ef5504a94&scope=wallet:user:read,wallet:accounts:read,wallet:user:email`;
    window.location.replace(Authorize_URL, "_blank");
  }

  async getToken() {
    if (this.state.code) {
      let data = {
        grant_type: "authorization_code",
        code: this.state.code,
        client_id:
          "22d5c636691caf290dc147258708f711f26ac987aac69e052544764fbd3be107",
        client_secret:
          "c2988f5b01bc888a51747ae37101c144a7b09d74221bb376f42feefdd7e26094",
        redirect_uri: "http://localhost:3000/profile",
      };

      let res = await axios.post("https://api.coinbase.com/oauth/token", data);
      if (res.status === 200) {
        this.setState({ access_token: res.data.access_token });
        this.setState({ refreshToken: res.data.refresh_token });
      }
    } else {
      await this.getCode();
      await this.getToken();
    }
  }

  async getUserDetails() {
    if (sessionStorage.getItem("user_details")) {
      this.setState({
        user_details: JSON.parse(sessionStorage.getItem("user_details")),
      });
    } else if (this.state.access_token) {
      let res = await axios.get(
        `https://api.coinbase.com/v2/user?access_token=${this.state.access_token}`
      );
      if (res.status === 200) {
        this.setState({ user_details: res.data.data });
        sessionStorage.setItem("user_details", JSON.stringify(res.data.data));
      }
    } else {
      await this.getToken();
      await this.getUserDetails();
    }
  }

  async getAccounts() {
    if (sessionStorage.getItem("accounts")) {
      this.setState({
        accounts: JSON.parse(sessionStorage.getItem("accounts")),
      });
    } else if (this.state.access_token) {
      let res = await axios.get(
        `https://api.coinbase.com/v2/accounts?access_token=${this.state.access_token}`
      );
      if (res.status === 200) {
        this.setState({ accounts: res.data.data });
        sessionStorage.setItem("accounts", JSON.stringify(res.data.data));
      }
    } else {
      await this.getToken();
      await this.getAccounts();
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Box sx={{ display: "flex", justifyContent: "center",mt:"20em" }}>
          <CircularProgress size={100} />
        </Box>
      );
    } else {
      const theme = createTheme();
      return (
        <>
          <NavBar></NavBar>

          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography component="h1" variant="h5">
                  Coinbase Details
                </Typography>
                <Avatar
                  sx={{
                    width: "7em",
                    height: "7em",
                    border: "4px solid purple",
                    borderRadius: "20%",
                  }}
                  src={this.state.user_details.avatar_url}
                ></Avatar>
                <Box noValidate sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Name"
                        value={this.state.user_details.name}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Country"
                        value={this.state.user_details.country.name}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        value={this.state.user_details.email}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </>
      );
    }
  }
}
