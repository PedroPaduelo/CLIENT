import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content:flex-start;
    flex-direction: ${props => props.flex_direction || "column" };

    margin-left: ${props => props.marginLefth || "0.0rem" };
    margin-right: ${props => props.marginRight || "0.0rem" };
    margin-top: ${props => props.marginTop || "0.0rem" };
    margin-bottom: ${props => props.marginBottom || "0.0rem" };
`;

export const InputGroup = styled.div`
    width: 100%;
    height: 100% auto;
    margin: 0.5rem;
    display: flex;
    justify-content:flex-start;
    flex-direction: ${props => props.flex_direction || "column" };
`;

export const Label = styled.label`
    margin-left: ${props => props.marginLefth || "0.0rem" };
    margin-right: ${props => props.marginRight || "0.0rem" };
    
    margin-top: ${props => props.marginTop || "0.0rem" };
    margin-bottom: ${props => props.marginBottom || "0.0rem" };

    font:  ${props => props.sizeLabel || "2rem" } Archivo;
`;

