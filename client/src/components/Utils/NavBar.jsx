import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Avatar,
  Grid,
  Link,
} from "@mui/material";
import {
  isMetaMaskInstalled,
  isMetaMaskConnected,
  initialiseMetamask,
  getAccount,
} from "../../hooks/metamask.jsx";
import connectWallet from "../../hooks/connectWallet.jsx";
import useWindowDimensions from "../../hooks/useWindowDimensions.jsx";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

let NAV_BAR_STYLE = {
  borderRadius: "5em",
  mt: "1em",
  backgroundColor: "black",
  backgroundImage:
    "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 82%, rgba(252,176,69,1) 100%)",
  flexGrow: 1,
};

await initialiseMetamask();

function InstallButton() {
  const routeChange = () => {
    let path = `https://metamask.io/`;
    window.open(path, "_blank");
  };

  return (
    <Button
      variant="contained"
      onClick={routeChange}
      size={"large"}
      color="secondary"
      sx={{ minWidth: "16em", mt: "7px", backgroundColor: "black", borderRadius: "5em" }}
    >
      <Typography variant="h6">Install MetaMask</Typography>
    </Button>
  );
}

function ConnectButton() {
  const { height, width } = useWindowDimensions();
  console.log(height, width);

  if (width > 1450) {
    return (
      <Button
        variant="contained"
        color="secondary"
        sx={{ minWidth: "16em", mt: "7px", backgroundColor: "black", borderRadius: "5em" }}
        onClick={connectWallet}
      >
        <Typography variant="h6">Connect Wallet</Typography>
      </Button>
    );
  } else {
    return (
      <Button
        variant="contained"
        color="secondary"
        sx={{ minWidth: "4em", mt: "5px", backgroundColor: "black", height: "3.5em", borderRadius: "5em" }}
        onClick={connectWallet}
      >

        <img src="./images/MetaMask.png" width={"45em"} />
      </Button>
    );
  }
}

function WalletButton() {
  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        sx={{ minWidth: "16em", mt: "7px", backgroundColor: "black", borderRadius: "5em" }}
      >
        <AccountBalanceWalletIcon />
        <Box ml={1}>
          <Typography variant="h6">
            {getAccount().substring(0, 5) +
              "..." +
              getAccount().substring(
                getAccount().length - 5,
                getAccount().length
              )}
          </Typography>
        </Box>
      </Button>
    </>
  );
}

function WalletBox(props) {
  if (isMetaMaskInstalled()) {
    if (isMetaMaskConnected()) {
      return <WalletButton />;
    } else {
      return <ConnectButton />;
    }
  } else {
    return <InstallButton />;
  }
}

async function RedirectProfile() {
  window.location.href = "/profile";
}

function Desktop(props) {
  let src = "";
  if (sessionStorage.getItem("user_details")) {
    src = JSON.parse(sessionStorage.getItem("user_details")).avatar_url;
  }
  return (
    <Box>
      <AppBar position="static" sx={NAV_BAR_STYLE}>
        <Toolbar>
          <Grid container>
            <Grid item xs={12} md={0.5} />
            <Link
              href="\dashboard"
              sx={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Grid item xs={12} md={0.5} >
                <img
                  src="/images/Logo.png"
                  alt="nft"
                  style={{ width: "4em", height: "4em", borderRadius: "40%" }} />
              </Grid>
            </Link>
            <Grid item xs={12} md={1} sx={{ mt: 1, flexGrow: 1 }}>
              <Link
                href="\dashboard"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >

                <Typography
                  fontFamily={"Aclonica"}
                  variant="h4"
                  sx={{ fontWeight: "Bold" }}
                >
                  OYH
                </Typography>
              </Link>
            </Grid>

            <Grid item xs={12} md={7}></Grid>

            <Grid item xs={12} md={2}>
              <WalletBox />
            </Grid>

            <Grid item xs={12} md={1}>
              <IconButton onClick={RedirectProfile} >
                <Avatar alt="Remy Sharp" src={src} style={{ border: "3px solid black" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function Mobile(props) {
  let src = "";
  if (sessionStorage.getItem("user_details")) {
    src = JSON.parse(sessionStorage.getItem("user_details")).avatar_url;
  }
  return (
    <Box>
      <AppBar position="static" sx={NAV_BAR_STYLE}>
        <Toolbar>
          <Grid container>
            <Grid item xs={12} md={1} />
            <Grid item xs={12} md={2} sx={{ mt: 1, flexGrow: 1 }}>
              <Link
                href="\dashboard"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Typography
                  fontFamily={"Aclonica"}
                  variant="h4"
                  sx={{ fontWeight: "Bold" }}
                >
                  OYH
                </Typography>
              </Link>
            </Grid>

            <Grid item xs={12} md={6}></Grid>

            <Grid item xs={12} md={2}>
              <WalletBox />
            </Grid>

            <Grid item xs={12} md={1}>
              <IconButton onClick={RedirectProfile} >
                <Avatar alt="Remy Sharp" src={src} />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function NavBar(props) {


  const { height, width } = useWindowDimensions();

  if (width < 900) {
    return <Desktop />
  }
  else {
    return <Desktop />;
  }
}

export default NavBar;
