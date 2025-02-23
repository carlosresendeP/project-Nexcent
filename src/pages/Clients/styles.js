import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--colorbackground);
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    width: 100%;
    height: 100%;

    padding: 20px 0;

    h2{
        font-size: 30px;
        font-weight: 600;
        color: var(--colorDarkSecondary);
    }

    p{
        font-size: 16px;
        color: var(--colorSecondary);
        text-align: center;
        font-weight: 400;
    }

    div{
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 20px;
        margin: 25px auto;
        width: 60%;
        height: auto;
        padding: 20px;



        img{
            width: 48px;
            margin-left: 20px;
        }

        
        @media (max-width: 468px){
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            width: 90%;
        }
    }


    
    @media (max-width: 468px){
        p{
            font-size: 14px;
            max-width: 90%;
        }
    }
`