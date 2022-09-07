import React, { Component } from "react";
import axios from "axios";
import NavBar from "../Utils/NavBar";
import AlignItemsList from "../Utils/ListItemNFT";
import {
    Paper,
    Typography,
    Grid,
} from "@mui/material";

export default class BuyPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nft: [],
            isLoading: true,
        };
    }
    async componentDidMount() {
    }

    render() {

        return (
            <>
                <NavBar />
                <Grid container>
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={8} >
                        <Paper elevation={0} style={{ width: "100%", borderRadius: "2em", height:"20em",marginTop:"2em" }}>
                            <Typography variant="h3" fontWeight={"bold"} textAlign={"center"}>
                                Stay tuned for more features!!!
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={2} />

                </Grid>

            </>
        );

    }
}
