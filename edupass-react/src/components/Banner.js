import React from 'react';
import {Box} from "@material-ui/core";
import './BannerStyle.css';

export default function Banner() {
    return (
        <Box className="banner-div">
            <div className="divisoria-banner">
                <h4 className="text-banner">Cursos Gratuitos</h4>
            </div>
            <div className="divisoria-banner bannerImage">
                <img alt="Imagem banner" className="img-banner" src="https://api.edupass.io/api/contents/categorias/perfil.png" />
            </div>
        </Box>
    );
}