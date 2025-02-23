import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    background-color:#fff;
    width: 100%;
    height: 84px;
    max-width:1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    margin: 0 auto;
    position:sticky;

    div{
        display: flex; 
        gap: 20px;
    }

    @media (max-width: 468px) {
        img{
            width: 100px;
        }

        div{
        }
    }
`

export const Navigate = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;

    nav{
        display: flex;
        gap: 50px;
        align-items: center;
        justify-content: center;


        a{
            text-decoration: none;
            color: var(--colorDarkSecondary);
            padding-bottom: 5px;
            transition: all 0.4s ease-in-out;
            position: relative;

            &::after{
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                background-color: var(--colorPrimary);
                width: 0%;
                height: 2px;
                transition: width 0.3s linear;
            }

            &:hover::after{
                width: 100%;
                color: var(--colorPrimary);
            }
        }
    }
    @media (max-width: 468px) {
        nav{
            display: none;
        }
    }

`

export const Button = styled(Link)`
    background-color: var(--colorPrimary);
    outline: none;
    border: none;
    width: 130px;
    height: 46px;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--colorbackground);
    transition: all 0.3s ease-in-out;
    font-size: 14px;

    &:hover{
        background-color: transparent;
        border: 1px solid var(--colorPrimary);
        color: var(--colorPrimary);
    }

    &.Login{
        background-color: transparent;
        color: var(--colorPrimary);
    }
    &.Login:hover{
        background-color: var(--colorPrimary);
        color: var(--colorbackground);
    }

    @media (max-width: 468px) {
        width: 100px;
        height: 36px;
        font-size: 10px;
        padding: 10px;
    }


`