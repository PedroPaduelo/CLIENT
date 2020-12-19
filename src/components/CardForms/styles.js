import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction: ${props => props.directionChildren || "column" };
    justify-content: ${props => props.justifyContent || "space-around" };
    margin-top: ${props => props.marginTop || "0px" }; 
    margin-bottom:${props => props.marginBottom || "0px" };  
`;
