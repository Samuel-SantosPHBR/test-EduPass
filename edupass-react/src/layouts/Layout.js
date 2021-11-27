import {Container, Grid} from "@material-ui/core";
import NavBar from "../components/NavBar";
import ActionButtons from "../components/ActionButtons";
import Banner from "../components/Banner";
import './LayoutStyles.css';
import Footer from "../components/Footer";

export default function Layout ({ children }) {
    return (
        <>
            <NavBar />
            <ActionButtons />
            <Banner />
            <div style={{backgroundColor:'#e2e2e2'}}>
            <Container >
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <h2 className="quantidadeCursos">{children.length} cursos de cursos gratuitos selecionados</h2>
                    </Grid>
                    {children}
                </Grid>
            </Container>
            </div>
            <Footer />
        </>
    );
}