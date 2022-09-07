import React, { Component } from "react";
import axios from "axios";
import NavBar from "../Utils/NavBar";
import AlignItemsList from "../Utils/ListItemNFT";
import {
  Box,
  CircularProgress,
  Grid,
} from "@mui/material";

export default class SpeculatorPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allnfts: [],
      isLoading: true,
    };
  }
  async componentDidMount() {
    const data = { type: "approved" };
    const response = await axios.post("http://localhost:4000/api/originator", data);
    if (response.status === 200) {
      this.setState({ allnfts: response.data });
      this.setState({ isLoading: false });
      console.log(this.state.allnfts);
    } else {
      console.log("error");
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: "20em" }}>
          <CircularProgress size={100} />
        </Box>
      );
    } else {
      // return <NavBar />;
      return (
        <>
          <NavBar />
          <Grid container>
            <Grid item xs ={12} md={2}/>
            <Grid item xs ={12} md={8} >
              {this.state.allnfts.map((nft, i) => (
                <AlignItemsList nft={nft} key={i} />
              ))}
            </Grid>
            <Grid item xs ={12} md={2}/>

          </Grid>
        </>
      );
    }
  }
}
