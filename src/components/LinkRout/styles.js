import styled, { css } from 'styled-components';

export const Container = styled.div`
    padding: 1.2rem;

    height: 4.8rem;
    border-radius : 10%   10%  0%  0%;
    color: white;

    a{
        color: white
    }
    svg{
        color: white;
        font-size: 2.2rem;
    }


    ${props => props.match && css`
        background: white;

        a{
            color: black
        }

        svg{
            color: black;
            font-size: 2.4rem;
        }

    `}





`;
