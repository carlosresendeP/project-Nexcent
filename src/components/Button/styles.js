import styled from 'styled-components';

export const Button = styled.button`
    background-color: var(--colorPrimary);
    outline: none;
    border: none;
    width: 135px;
    height: 52px;
    border-radius: 5px;
    margin-top: 32px;
    font-size: 17px;
    color: var(--colorbackground);
    transition: all 0.3s ease-in-out;
    
    &:hover{
        background-color: transparent;
        border: 1px solid var(--colorPrimary);
        color: var(--colorPrimary);
    }


`