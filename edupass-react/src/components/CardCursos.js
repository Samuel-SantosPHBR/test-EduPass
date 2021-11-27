import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Grid,Button} from "@material-ui/core";

import './CardCursosStyle.css';
import {Apartment, DesktopMac, Event, MenuBook, Room, Schedule} from "@material-ui/icons";


export default function RecipeReviewCard(props) {
    const { dataElement } = props;
    return (
        <Grid item xs={3}>
            <Card>
                <CardContent>
                    <div className="card-body" variant="body2" color="textSecondary">
                        <div className="header-card">
                            <img src="https://api.edupass.io/api/contents/assets/logo.png" />
                            <h1>{dataElement.curso_detalhe.curso.curso || 'Sem Nome'}</h1>
                        </div>
                        <hr />
                        <div className="card-section">
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <span>
                                        <b>Valor com</b>
                                        <b>Edupass</b>
                                    </span>
                                    <span className="desconto">
                                        R$: 0,00
                                    </span>
                                    <span>
                                        (era R$ {dataElement.valor_original.replace('.','').replace(/([0-9]{2})$/g, ",$1") || '0,00'})
                                    </span>
                                </Grid>
                                <Grid item xs={6}>
                                    <span>
                                        <span className="desconto"><b className='lateral'>Bolsa</b> {dataElement.desconto || '100'}%</span>
                                    </span>
                                    <span>
                                        Até o fim do Curso
                                    </span>
                                </Grid>
                            </Grid>
                            <hr />
                        </div>
                        <div className="footer-card">
                            <Grid container spacing={1} className="icons-left">
                                <Grid item xs={6}>
                                    <span><MenuBook fontSize="small" /> {dataElement.curso_detalhe.categoria_especifica}</span>
                                </Grid>
                                <Grid item xs={6}>
                                    <span><DesktopMac fontSize="small" /> {dataElement.modalidade.modalidade}</span>
                                </Grid>
                                <Grid item xs={6}>
                                    <span><Schedule fontSize="small" /> {dataElement.turno}</span>
                                </Grid>
                                <Grid item xs={6}>
                                    <span><Apartment fontSize="small" /> {dataElement.campus.instituicao.instituicao}</span>
                                </Grid>
                                <Grid item xs={6}>
                                    <span><Event fontSize="small" /> {dataElement.duracao} {dataElement.duracao_tipo}</span>
                                </Grid>
                                <Grid item xs={6}>
                                    <span><Room fontSize="small" /> {dataElement.campus.cidade}</span>
                                </Grid>
                            </Grid>
                            <Button onClick={e => {
                                alert(`Curso: ${dataElement.curso_detalhe.curso.curso} \n${dataElement.campus.cidade}\n${dataElement.duracao} ${dataElement.duracao_tipo}\n${dataElement.turno}\n${dataElement.modalidade.modalidade}`)}
                            } style={{marginTop: 25,marginBottom: 20}} variant="contained" color="secondary" href="#contained-buttons">
                                SAIBA MAIS
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    );
}