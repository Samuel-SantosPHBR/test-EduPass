import Layout from "../layouts/Layout";
import CardCursos from "../components/CardCursos";
import data from '../cursos.json';
import {useEffect, useState} from "react";

export default function Pagina () {
    const [dataApi,setDataApi] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response =  await fetch('http://localhost:5000');
                const json = await response.json();
                setDataApi(json);
                console.log(json)
            }catch (e) {
                console.log(e);
            }
        }
        fetchData();
    },[])
    return (
        <Layout>
            {dataApi.length > 0 ? dataApi.map((curso,index) => <CardCursos key={index} dataElement={curso} />) : ''}
        </Layout>
    );
}