import styled from 'styled-components';

export const Container = styled.div`
    flex:28rem;
    padding: 0 15px;
    height: 100%;
    overflow: auto;

    opacity: ${props => props.done === "true" ? 0.6 : 1};


    & + div{
        border-left: 3px solid rgba(0, 0, 0, 0.05)
    }

    header{
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 3rem;

        h2{
            font-weight: 700;
            font-size: 16px;
            padding: 0 10px;
        }

        button{
            width: 30px;
            height: 30px;
            border-radius: 10px;
            background: #3b5bfd;
            border: 0;
            cursor: pointer;
        }
    }

    ul {
        margin-top: 2rem;
    }
`;