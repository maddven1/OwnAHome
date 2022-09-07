import { Dashboard } from "@mui/icons-material";
import * as React from 'react';
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import HouseIcon from '@mui/icons-material/House';
import Paper from '@mui/material/Paper';

import NavBar from '../Utils/NavBar'

const theme = createTheme();

function Originator() {


    const [firstName, setfirstName] = React.useState("")

    const [Address, setAddress] = React.useState("")
    const [contactname, setcontactname] = React.useState("")
    const [propertytype, setpropertytype] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setpassword] = React.useState("")
    const [Rent, setRent] = React.useState("")
    const [Area, setArea] = React.useState("")
    const [date, setDate] = React.useState(null);
    const [Description, setDescription] = React.useState("")



    const handlefirstNameChange = (event) => { setfirstName(event.target.value); };

    const onChangeEmail = (event) => { setEmail(event.target.value); };
    const onChangeAddress = (event) => { setAddress(event.target.value); };
    const onChangecontactname = (event) => { setcontactname(event.target.value); };
    const onChangepropertytype = (event) => { setpropertytype(event.target.value); };
    const onChangePassword = (event) => { setpassword(event.target.value); };
    const onChangeRent = (event) => { setRent(event.target.value); };
    const onChangeArea = (event) => { setArea(event.target.value); };
    const onChangeDescription = (event) => { setDescription(event.target.value); };

    const resetInputs = () => {
        setfirstName("");
        setAddress("");
        setcontactname("");
        setpropertytype("");
        setEmail("");
        setpassword("");
        setRent("");
        setArea("");
        setDescription("");
        setDate(null);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            firstName: firstName,
            Address: Address,
            contactname: contactname,
            propertytype: propertytype,
            email: email,
            password: password,
            Rent: Rent,
            Area: Area,
            Description: Description,
            date: Date.now(),
        };

        console.log(newUser)

        axios
            .post("http://localhost:4000/api/originator/register", newUser)
            .then((response) => {
                alert("Registration Succesful!!");
                console.log(response.data);
            });

        resetInputs();
    };

    return (

        <ThemeProvider theme={theme}>
            <NavBar />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Paper style={{minWidth:"30em", paddingLeft:"3em",paddingRight:"3em",paddingTop:"1em",paddingBottom:"1em", borderRadius:"3em" ,marginTop:"2em" , border:"2px solid black"}}>
                    <Box
                        sx={{
                            marginTop: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <HouseIcon />
                        </Avatar>
                        <Typography component="h1" variant="h4" fontWeight={"bold"}>
                            Asset Details
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 5 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={15}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="Owner Name"
                                        value={firstName}
                                        onChange={handlefirstNameChange}
                                        autoFocus


                                    />
                                </Grid>



                                <Grid item xs={15}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="contactname"
                                        label="Contact Number"
                                        type="number"
                                        name="contactname"
                                        value={contactname}
                                        onChange={onChangecontactname}
                                    />
                                </Grid>

                                <Grid item xs={15}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        value={email}
                                        onChange={onChangeEmail}
                                    />
                                </Grid>


                                <Grid item xs={15}>
                                    <FormControl fullWidth>
                                        <InputLabel id="propertytype">Property Type</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="propertytype"
                                            value={propertytype}
                                            onChange={onChangepropertytype}
                                        >
                                            <MenuItem value={1}>1 BHK</MenuItem>
                                            <MenuItem value={2}>2 BHK</MenuItem>
                                            <MenuItem value={3}>3 BHK</MenuItem>

                                        </Select>

                                    </FormControl>

                                </Grid>

                                <Grid item xs={15}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="Address"
                                        label="Property Address"
                                        type="Address"
                                        id="Address"
                                        // autoComplete="new-password"
                                        value={Address}
                                        onChange={onChangeAddress}

                                    />
                                </Grid>

                                <Grid item xs={15}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="Area"
                                        label="Area (sqft)"
                                        type="number"
                                        id="Area"
                                        // autoComplete="new-password"
                                        value={Area}
                                        onChange={onChangeArea}

                                    />
                                </Grid>

                                <Grid item xs={15}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="Description"
                                        label="Description"
                                        type="Description"
                                        id="Description"
                                        // autoComplete="new-password"
                                        value={Description}
                                        onChange={onChangeDescription}

                                    />
                                </Grid>

                                {/* <Grid item xs={15}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="Rent"
                                        label="Rent(Rs)"
                                        type="number"
                                        id="Rent"
                                        // autoComplete="new-password"
                                        value={Rent}
                                        onChange={onChangeRent}
                                   
                                    />
                                </Grid> */}

                                {/* <Grid item xs={15}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="I want to receive and updates via email."
                                    />
                                </Grid> */}
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                size="large"
                                onClick={onSubmit}
                                sx={{ mt: 3, mb: 2 }}
                                style={{ borderRadius: "3em" }}
                            >
                                Register
                            </Button>
                            <Grid container justifyContent="flex-end">
                                {/* <Grid item>
                                    <Link href="SignInSide" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid> */}
                            </Grid>
                        </Box>
                    </Box>
                </Paper>
                {/* <Copyright sx={{ mt: 5 }} /> */}
            </Container>
        </ThemeProvider>
    );
}



export default Originator;
