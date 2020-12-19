import styled from 'styled-components';

export const Container = styled.div`
    margin: 0.5rem;
    display: flex;
    justify-content:flex-start;
    flex-direction: row;

    label{
        margin-left: 1rem;
        margin-top: ${props => props.marginTop || "0.3rem" };
        font:  ${props => props.sizeLabel || "2rem" } Archivo;
    }

    input{
        margin: 0;
        width: ${props => props.sizeInput || "2.6rem" };
        height: ${props => props.sizeInput || "2.6rem" };
    }
`;
