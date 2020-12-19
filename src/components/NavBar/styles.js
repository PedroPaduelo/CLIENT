import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 6rem;
    padding: 0 30px;
    background:  ${props => props.fundoNavBar || "" };
    color: #fff;
    
    display: flex;
    justify-content: space-between;

    h1{
        width: 30rem;
        font-weight: 700;
        font-size: 2rem
    }
    
  
`;
