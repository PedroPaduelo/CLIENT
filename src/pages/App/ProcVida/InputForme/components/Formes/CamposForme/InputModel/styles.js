import styled from 'styled-components';




export const ContainerCheckBox = styled.div`
    width: 100%;
    margin: 0.5rem;
    display: flex;
    justify-content:flex-start;
    flex-direction: column;
`;



export const ContainerText = styled.div`
    width: 100%;    
    margin: 0.5rem;
    display: flex;
    justify-content:flex-start;
    flex-direction: column;
`;




export const InputGroup = styled.div`
    width: 100%;
    height: 100% auto;
    margin: 0.5rem;
    display: flex;
    justify-content:flex-start;
    flex-direction: ${props => props.flex_direction || "column" };
`;





export const InputText = styled.input`
    width: ${props => props.sizeWidth || "100%" };
    height: ${props => props.sizeHeight || "3.6rem" };
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font:  1.9rem Archivo;
`;

export const InputCheckted = styled.input`
    width: ${props => props.sizeWidth|| "2.6rem" };
    height: ${props => props.sizeHeight || "2.6rem" };
`;



export const Label = styled.label`
    margin-left: ${props => props.marginLefth || "0.0rem" };
    margin-right: ${props => props.marginRight || "0.0rem" };
    
    margin-top: ${props => props.marginTop || "0.0rem" };
    margin-bottom: ${props => props.marginBottom || "0.0rem" };
    

    font:  ${props => props.sizeLabel || "2rem" } Archivo;
`;

