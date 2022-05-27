import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 10px;
    border: 1px solid #ccc;
    margin: 16px 16px;
    border-radius: 10px;
    width: 350px;
    height: auto;
    align-content: center;
`;

export const WrapperTitle = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;

`;

export const WrapperFullName = styled.h4`
    font-size: 16px;
    font-weight: bold;
    margin: 10px 0;
    color: #2d3748;
`;

export const WrapperLink = styled.a`
    padding: 2px 2px;
    font-size: 14px;
    font-weight: bold;
    margin: 10px 0;
    color: #0E93E9;
    transition: .3s ,color .2s ease-in-out, box-shadow .3s ease-in-out;
    

    &:hover {
        display: block;
        color: #fff;
        font-style: italic;
        text-shadow: 2px 2px 3px black;
        box-shadow: inset 200px 0 0 0 #039be5;     
               
    }
`;