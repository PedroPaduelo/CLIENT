import styled from 'styled-components';

export const Container = styled.div`
    margin: 0.5rem;
    width: 15rem;
    height: 3rem;
    display: flex;
    justify-content:center;
    background: ${props => props.cor || "blue" };
    
    border-radius: 0.8rem;

    p{
        margin: 0.5rem;
        color: white;
        font-weight: 700;
        font-size: 1.6rem
    }

  
`;
