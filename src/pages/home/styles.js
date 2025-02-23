import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--colorbackground);
    width: 100%;
    height: 100%;
    min-height: 100vh;



`
export const Title = styled.h2`
    font-size: 30px;
    max-width: 70%;
    color: var(--colorSecondary);

    @media (max-width: 468px){
        font-size: 30px;
    }

`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    gap: 10px;
    margin: 0 auto;
    max-width: 1200px;

    img{
        width: 50%;
    }

    @media (max-width: 468px){
        margin-left: 5%;

        img{
            display: none;
        }
    }
`

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    gap: 16px;
    color: var(--colorSecondary);


    h2{
        font-size: 50px;
        max-width: 70%;

        span{
            color: var(--colorPrimary);
        }
    }

    p{
        font-size: 14px;
        font-weight: 400;
        color: var(--colorSecondary);
    }

    
    @media (max-width: 468px){
        h2{
            font-size: 30px;
        }
        p{
            font-size: 14px;
            max-width: 80%;
        }
    }
`





export const Unlock = styled.div`
    background-color: var(--colorbackgroundwhite);
    width: 100%;
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;





`

export const UnlockContent = styled.div`
    width: 90%;
    height: 100%;

    max-width: 1280px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    padding: 20px 0;
    background-color: var(--colorbackgroundwhite);

    
    @media (max-width: 468px){
        flex-direction: column;
    }

    div{
        max-width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 20px;

        
        @media (max-width: 468px){
            max-width: 100%;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
    }

    
    img{
        width: 80%;
        max-width: 50%;

        
        @media (max-width: 468px){
            width: 100%;
            max-width: 100%;
        }
    }

    p{
        font-size: 14px;
        font-weight: 400;
        color: var(--colorSecondary);
        line-height: 20px;
        letter-spacing: 0.4px;

    }
    
    @media (max-width: 468px){
        p{
            font-size: 12px;
            max-width: 80%;
        }
    }   


`




export const Achievements = styled.div`
    width: 100%;
    height: 288px;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--colorbackground);

    @media (max-width: 468px){
        height: 100%;
    }



`

export const AchievementsContent = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1280px;

    display: flex;
    align-items: center;

    div{
        width: 50%;

        p{
            font-size: 14px;
            font-weight: 400;
            color: var(--colorSecondary);
            line-height: 20px;
            letter-spacing: 0.4px
        }

        span{
            color: var(--colorPrimary);
        }

        @media (max-width: 468px){
            width: 80%;
            text-align: center;
            padding: 15px 0;

        }
    }

    .titles{
        @media (max-width: 468px){
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 20px;  
        }
    }

    @media (max-width: 468px){
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        text-align: center;
    }
`



export const AchievementsCards = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 50%;

    @media (max-width: 468px){
        width: 80%;
    }

`

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    div p{
        font-size: 20px;
        font-weight: 700;
        color: var(--colorDarkSecondary);
    }

    div span{
        color: var(--colorSecondary);
        font-size: 14px;
        font-weight: 200;
    }
`






export const CommunityUpdates = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--colorbackground);
    flex-direction: column;


`




export const CommunityContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    gap: 16px;
    width: 90%;
    height: 100%;
    margin-top: 30px;
    padding: 30px 0;


    h2{
        font-size: 30px;
        color: var(--colorSecondary);
    }

    .titles{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        width: 50%;
        max-width: 50%;
        text-align: center;

        p{
            font-size: 14px;
            font-weight: 400;
            color: var(--colorSecondary);
            line-height: 20px;
            letter-spacing: 0.4px;
        }
    }

    @media (max-width: 468px){
        .titles{
            width: 100%;
            max-width: 100%;
        }
        p{
            width: 90%;
        }
    }


`

export const CardUpdates = styled.div`
    width: 90%;
    height: 100%;
    max-width: 1280px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin-top: 60px;

    @media (max-width: 468px){
        flex-direction: column;
    }

        .cards{
        width: 30%;
        height: 176px;
        background-color: var(--colorbackgroundwhite);
        max-width: 1280px;
        border-radius: 5px;
        box-shadow: 0 0 20px rgba(0,0,0,0.2);

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
        text-align: center;

        a{
            margin-top: 20px;
            color: var(--colorPrimary);
            text-decoration: none;
            font-weight: bold;
        }

        a::after{
            content: '->';
            margin-left: 5px;
        }

        @media (max-width: 468px){
            width: 80%;
        }



    }


`

export const Footer = styled.div`
    background-color: var(--colorDarkSecondary);
    padding: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 468px){
        flex-direction: column;
        gap: 20px;
    }
`

export const CompanyInfo = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-direction: column;

    @media (max-width: 468px){
        width: 100%;
    }


    .company{
        display: flex;
        align-items:start;
        justify-content: center;
        flex-direction: column;
        gap: 30px;

        p{
            color: var(--colorbackgroundwhite);
            font-size: 14px;
            font-weight: 200;
        }

        @media (max-width: 468px){
            width: 100%;
        }

    }

    .social-media{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;

        div{
            background-color: var(--colorSecondary);
            width: 30px;
            height: 30px;
            padding: 0;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--colorbackgroundwhite);
            
            i{
                font-size: 14px;
                font-weight: 200;
            }
        }

        @media (max-width: 468px){
            width: 100%;
        }
    }
`

export const Links = styled.div`
    width: 70%;
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 50px;

    @media (max-width: 468px){
        width: 100%;
        flex-direction: column;
        gap: 20px;
    }

    .links{
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        margin-left: 20px;
        gap: 20px;
        position: relative;


        h3{
            color: var(--colorbackgroundwhite);
            font-size: 22px;
            font-weight: 600;
        }

        input{
            width: 100%;
            height: 40px;
            padding: 10px;
            border: none;
            border-radius: 5px;
            background-color: var(--colorSecondary);
            color: var(--colorbackground);
            position: relative;
        }

        button{ 
            background-color: transparent;
            outline: none;
            border: none;
            position: absolute;
            bottom: 5px;
            right: 10px;
            padding:4px;
            display: flex;
            align-items: center;
            justify-content: center;


            &:hover{
                background-color: var(--colorPrimary);
                border-radius: 4px;
            }
        }


    }

    .links ul li{
        list-style: none;
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        gap: 20px;

        a{
            color: var(--colorbackgroundwhite);
            text-decoration: none;
            font-size: 14px;
            font-weight: 200;
        }
    }

`