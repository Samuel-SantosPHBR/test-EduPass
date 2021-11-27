import React from 'react';
import {
    AppBar,
    Toolbar,
    CssBaseline,
    makeStyles,
} from "@material-ui/core";

import './FooterStyle.css';

const useStyles = makeStyles((theme) => ({
    navlinks: {
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
        color: "black",
        marginTop: "0%"
    },
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <AppBar position="fixed" style={{backgroundColor:"white",bottom:'0%',top:'auto'}}>
            <CssBaseline />
            <Toolbar>
                <div variant="h4" className={classes.logo}>
                    <p className="text-footer">Termos de Uso</p>
                    <p className="text-footer">Politica de Privacidade</p>
                </div>
                <div className="footerCenter" className={classes.logo}>
                    <p className="text-footer">Edupass 2021 | Todos os direitos reservados</p>
                    <p className="text-footer centerFooterText">Versão 1.3.5</p>
                </div>
                <div>
                    <span className="spanFooter spanFooterColor">Precisa de ajuda? </span>
                    <span className="spanFooter"><img style={{width:'3vh'}} src="https://api.edupass.io/api/contents/assets/whatsapp-icon.png" /> Chama no WhatsApp</span>
                </div>
            </Toolbar>
        </AppBar>
    );
}