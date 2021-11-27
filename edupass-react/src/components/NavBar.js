import React from 'react';
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles, Link, OutlinedInput, InputAdornment, InputLabel, FormControl
} from "@material-ui/core";

import './NavBarStyle.css';
import {ExpandMore, Search} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "black",
        fontSize: "15px",
        cursor: "pointer",
    },
}));

export default function NavBar() {
    const classes = useStyles();
    return (
        <AppBar position="static" style={{backgroundColor:"white"}}>
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4" className={classes.logo}>
                    <img alt="Logo EduPass" className="logoImg" src="https://api.edupass.io/api/contents/assets/logo.png" />
                </Typography>
                <div className="inputBusca">
                    <FormControl size="small" variant="outlined" >
                        <InputLabel style={{fontSize:13}}  htmlFor="outlined-adornment-pesquisar">Pesquisar</InputLabel>
                        <OutlinedInput style={{borderRadius:30,height:35}} id="outlined-adornment-pesquisar" variant="outlined" label="" endAdornment={
                            <InputAdornment position="end"><Search style={{backgroundColor:'#e355e6',borderRadius:30}} fontSize="small"  />
                            </InputAdornment>} />
                    </FormControl>
                </div>
                <div className={classes.navlinks} >
                    <Link to="/" className={classes.link}>
                        Início
                    </Link>
                     <span className="spanHead">Olá,</span>
                     <span className="spanHead spanHeadColor">Matheus <ExpandMore fontSize="small"  /> </span>
                </div>
            </Toolbar>
        </AppBar>
    );
}