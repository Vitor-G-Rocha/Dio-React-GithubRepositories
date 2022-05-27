import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 5px;

    input{
        border: 1px solid #ccc;
        border-radius: 10px;
        width: 100%;
        height: 40px;
        padding: 10px;
        font-weight: 500;
    }

    button {   
        background-color: #225ed8;
        padding: 5px 10px;
        margin: 0 10px;
        border-radius: 10px;       

        &:hover {
            background-color: #2c5282;
            box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.3);
        }

        span {
            font-weight: bold;
            color: white;
            font-size: 16px;
        }
    }
`;