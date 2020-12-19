import styled from 'styled-components';

export const Container = styled.div`
    margin: 0.5rem;
    display: flex;
    align-items:  center;
    flex-direction: ${props => props.directionInputLabel || "row" };
    justify-content: flex-start;
    align-items: ${props => props.directionInputLabel==="column" ? "flex-start" : "center" }; 

    label{
        flex: "1";
        margin-right: 1rem;
        margin-top: 0.8rem;
        font:  ${props => props.sizeLabel || "2rem" } Archivo;
    }

    input{
        flex: ${props => props.sizeInputLargura ? "" : "100" };
        width: ${props => props.sizeInputLargura || "" };
        height: ${props => props.sizeInput || "3.6rem" };
        border-radius: 0.8rem;
        background: #F8F8FC;
        border: 1px solid #c6c6d4;
        outline: 0;
        padding: 0 1.2rem;
        font:  1.6rem Archivo;

        
    }
`;
