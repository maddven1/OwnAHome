import React from 'react'
import { useState } from 'react';

import { Grid, Paper, Button, Box, Typography } from "@mui/material"
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

import { isMetaMaskConnected, isMetaMaskInstalled, initialiseMetamask, getAccount } from "../../hooks/metamask.jsx"

import connectWallet from '../../hooks/connectWallet.jsx'

await initialiseMetamask()

function InstallButton() {
    const routeChange = () => {
        let path = `https://metamask.io/`;
        window.open(path, '_blank');
    }

    return (
        <Button variant="contained" onClick={routeChange} size={"large"} color="secondary" sx={{ minWidth: "16em", mt: "7px", backgroundColor: "black",borderRadius: "5em" }}>
            <Typography variant="h6">
                Install MetaMask
            </Typography>
        </Button>
    )
}

function ConnectButton() {
    return (
        <Button variant="contained" color="secondary" onClick={connectWallet} size={"large"} sx={{ minWidth: "16em", mt: "7px", backgroundColor: "black",borderRadius: "5em" }}>
            Connect To metamask
        </Button >
    )
}

function WalletButton() {
    return (
        <>
            <Button variant="contained" color="secondary" sx={{ minWidth: "16em", mt: "7px", backgroundColor: "black" ,borderRadius: "5em"}}>
                <AccountBalanceWalletIcon />
                <Box ml={1}>
                    <Typography variant="h6">
                        {getAccount().substring(0, 5) + "..." + getAccount().substring(getAccount().length - 5, getAccount().length)}
                    </Typography>
                </Box>
            </Button>
        </>
    )
}

function ConnectBox() {
    let [elev, setElev] = useState(3);


    return (
        <>
            <Grid container>
                <Paper elevation={elev} onMouseOver={() => { setElev(20) }} onMouseOut={() => { setElev(3) }}>

                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        style={{ minHeight: '25em', minWidth: '25em' }}
                    >

                        <Grid item mt="2em">

                            {isMetaMaskInstalled() ? (
                                <>
                                    {isMetaMaskConnected() ? (
                                        <>
                                            <WalletButton />
                                        </>
                                    ) : (
                                        <>
                                            <ConnectButton />
                                        </>
                                    )}
                                </>
                            ) : (
                                <>
                                    <InstallButton />
                                </>
                            )}

                        </Grid>
                        <Grid item xs={12} mt={"2em"} >

                            <Paper elevation={0}>
                                <img src="./images/MetaMask.png" width={"300em"} />
                            </Paper>
                        </Grid>
                    </Grid>
                </Paper >
            </Grid >
        </>
    )
}

export default ConnectBox