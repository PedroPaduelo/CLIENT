import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
export default createGlobalStyle`


*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html, body, #root {
    height: 100%;
}


body{
    font: 14px 'Roboto' sans-serif;
    background: #ecf1f8;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
}

ul{
    list-style: none; 
}


`;



export const CardForm = styled.div`
    width:100%;
    display: flex;
    flex-direction: ${props => props.directionChildren || "column" };
    justify-content: ${props => props.justifyContent || "space-around" };
    margin-top: ${props => props.marginTop || "0px" }; 
    margin-bottom:${props => props.marginBottom || "0px" };  
`;


export const Card = styled.div`
    width: ${props => props.width || "100%" };
    height: ${props => props.height || "100%" };
    margin: 0.9rem;

    
    display: flex;
    flex-direction: ${props => props.directionChildren || "column" };
    align-items: center;
    justify-content: center;
    
    background: ${props => props.cor || "#ffffff" };

    
    border-radius: 0.6rem;
    box-shadow: -0.1rem -0.1rem 0.8rem 0.1rem rgb(148, 148, 148);


    button{
            width: 150px;
            height: 60%;
            border-radius: 10px;
            background: ${props => props.corButton || "#3b5bfd" }; 
            border: 0;
            cursor: pointer;
            color: #fff;
            margin: 2rem;
    }
    h3{
        color: #6A6180;
        font-weight: 700
    }
  
`;


export const BulateInfoCard = styled.div`
    margin: 0.5rem;
    display: flex;
    flex-direction: column;

    strong{
        margin-top: 0.5rem;
        color: #6A6180;
        font-size: 1.6rem;
    }

    p{
        margin-top: 0.5rem;
        color: #6A6180;
        font-weight: 700;
        font-size: 1.6rem
    }
  
`;



