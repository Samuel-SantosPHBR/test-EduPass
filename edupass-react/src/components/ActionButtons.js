import React from 'react';
import {Box, Button} from "@material-ui/core";
import './ActionButtonsStyle.css';
import {ExpandMore} from "@material-ui/icons";

export default function ActionButtons() {
    return (
        <Box className="action-div">
            <span className="button-action">
                <Button style={{backgroundColor:'#7b287e',color:'white'}} variant="contained" color="secondary" endIcon={<ExpandMore />}>Cursos Gratuitos</Button>
            </span>
            <span className="button-action">
                <Button variant="contained" color="default" endIcon={<ExpandMore />}>Áreas</Button>
            </span>
            <a href="/" className="remover-filtro">
                Remover filtros
            </a>
        </Box>
    );
}