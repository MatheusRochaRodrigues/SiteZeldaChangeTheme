import styled from 'styled-components'

// import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
    /* width: 94.5%; */
    width: 1301px;
    /* max-width: 90vh; */
    /* min-width: 95%; */
    height: 1700px;
    /* display: flex; */
    /* background-color: rgb(56, 73, 73); */
    background-color: ${props => props.theme.colors.primary};
    /* background-color: rgb(26, 25, 25); */

    margin:0 auto;			     /* 1primeiro metodo Funcional  */ 

    padding: 15px;
    /* padding: 15px; */
    /* padding-left: 10px;      vai ajudar a centralizar, aumentar os pixels   pode comentalo para manter em seu padrao q tb esta centralizado */
    /* text-align:left; */
    /* justify-content: center; */
    border-radius: 6px;
    border: 1.6px solid rgba(105, 105, 105, 0.575);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

    /* ---------Especifico para alinhar os elementos com flex box no container ------------------------- */
    display: flex;
    /* align-items: center; */

    /* -------------para centralizar o flex box no centro da pagina se necessario ----------------------- */
    /* justify-content: center; */ 


    flex-wrap: wrap;

    /* flex-direction: column; */

    h1,h2{

        /* color: green; */
        text-shadow: 1px 1px black;
        /* flex-grow: 1; */
        font-size: 1.9em;
        /* color: rgb(170, 15, 15); */
        color: ${props => props.theme.colors.text};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        /* overflow: hidden; */
        /* cores padroes de branco para o titulo branco */
        
    }

    h2{
            /* color: rgb(202, 202, 7); */
            /* color: rgb(2, 121, 2); */
            color: ${props => props.theme.colors.sub_text};
            /* color: #c0c0c0; */
            margin-bottom: 60px;

            /* &:hover{
                color: white;
            } */

        }

    /* img{
        border: 2.2px solid black;
        
    } */


    @media (max-width: 900px){

        width: 88%;
        /* height: 1960px; */

    }

    @media (min-width: 720px) and (max-width: 1280px){

        width: 94%;

    }


`;