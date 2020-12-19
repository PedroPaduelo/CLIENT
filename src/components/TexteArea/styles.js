import styled from 'styled-components';

export const Container = styled.div`

    margin: 0.5rem;
    width: 100%;
    display: flex;
    justify-content:flex-start;
    flex-direction: column;

    label{
        margin-right: 1rem;
        font:  ${props => props.sizeLabel || "2rem" } Archivo;
    }

    textarea{
        width: 100%;
        height: 10rem;
        min-height: 8rem;
        border-radius: 0.8rem;
        background: #F8F8FC;
        border: 1px solid #c6c6d4;
        outline: 0;
        resize: vertical;
        padding: 1.2rem 1.6rem;
        font:  1.6rem Archivo;
    }

    
`;
