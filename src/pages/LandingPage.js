import React, { useState } from 'react';
import styled from 'styled-components';
import StartButtonComponent from '../components/StartButtonComponent';
import QuizPage from './QuizPage';


const Wrapper = styled.div`
    display: ${props => props.isShow === true ? 'flex' : 'none'};
    width:100%;
    background-color:white;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const Container = styled.div`
    margin-top:18.6rem;
    margin-bottom:3rem;
    text-align:center;
`
const Intro = styled.div`
    font-family:'Poppins';
    font-size:1.4rem;
    font-weight:400;
    text-align:center;
    color:#A7A7A7;
    margin-bottom:4rem;
`
const Title = styled.div`
    font-family:'Poppins';
    font-weight: 700;
    font-size:2.5rem;
    text-align:center;
    color:#E18AAA;
    margin-top:1.9rem;
    margin-bottom:8.4rem;
`
const Footer = styled.div`
    font-family:'Poppins';
    font-size:1.4rem;
    font-weight:400;
    text-align:center;
    margin-top:8.9rem;
    color:#A7A7A7;
`



function LandingPage() {

    const [isShow, setIsShow] = useState(true);
    const [isQuizShow, setIsQuizShow] = useState(false);

    const onClickStartBtn = () => {
        setIsShow(false);
        setIsQuizShow(true);
    }
    return (
        <>

            <Wrapper isShow={isShow}>
                <Container>
                    <Intro>What Kind of College Roommate Are You?<br /> Find out with a quick test 😀</Intro>
                    <Title>Roome</Title>
                    <StartButtonComponent type={true} text={"Start"} onclick={onClickStartBtn} />
                    <Footer>made by Jin Park @ Cornell with 🧀</Footer>
                </Container>
            </Wrapper>
            <QuizPage isShow={isQuizShow} />
        </>
    );
}

export default LandingPage;