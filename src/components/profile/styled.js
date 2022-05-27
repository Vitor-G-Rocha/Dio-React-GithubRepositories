import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: auto;
    margin-left: 10px;
    height: 200px;
    h1 {
        font-size: 32px;
        font-weight: bold;
    }

    h3 {
        font-size: 18px;
        font-weight: bold;
    }

    h4 {
        font-size: 16px;
        font-weight: bold;
    }
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    div {
        margin: 10px;
    }
`;

export const WrapperUserGeneric = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    h3 {
        margin-right: 10px;
        text-align: center;
    }  
    
    a {
        font-size: 16px;
        color: #0E93E9;
        font-weight: bold;

        &:hover {
            font-style: italic;
        }
    }

`;

export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 175px;
    margin: 10px;
`;