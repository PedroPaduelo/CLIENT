import styled from 'styled-components';

export const Container = styled.div`
    width: 40rem;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    p{
        font-weight: 600;
        font-size: 1.5rem
    }
    img{
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        margin: 1rem;
    }
    button{
        width: 5rem;
        background: rgba(0,0,0,0);
        border-radius: 10px;
        border: 0;
        cursor: pointer;
    }
`;
