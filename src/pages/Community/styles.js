import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--colorbackgroundwhite);
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    p{
        margin-top: 20px;
        font-size: 16px;
        text-align: center;
        font-weight: 400;
        color: var(--colorSecondary);
    }
`
export const Title = styled.div`
        font-size: 30px;
        font-weight: 600;
        color: var(--colorDarkSecondary);
        max-width: 80%;
        text-align: center;
        margin-top: 30px;
`
export const ContentGrid = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    margin: 30px auto ;

    width: 90%;
    max-width: 1200px;

    img{
        width: 65px;
    }

    
    @media (max-width: 468px){
        flex-direction: column;
        gap: 20px;
    }

`
export const Card = styled.div`
    width: 300px;
    padding: 24px;
    background-color: #fff;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

    p{
        text-align: center;
        color: var(--colorSecondary);
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0.4px;
    }
`


