import styled from 'styled-components';

export const Container = styled.div`
    width: ${props => props.width || "100%" };
    height: ${props => props.height || "100%" };
    margin: 0.5rem;

    
    display: flex;
    flex-direction: ${props => props.directionChildren || "column" };
    align-items: center;
    justify-content: center;
    
    background: ${props => props.cor || "#ffffff" };

    
    border-radius: 0.6rem;
    box-shadow: -0.1rem -0.1rem 0.8rem 0.1rem rgb(148, 148, 148);


    button{
            width: 150px;
            height: 50px;
            border-radius: 10px;
            background: ${props => props.corButton || "#3b5bfd" }; 
            border: 0;
            cursor: pointer;
            color: #fff;
            margin: 2rem;
    }

  
`;
