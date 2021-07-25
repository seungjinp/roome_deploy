import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ButtonComponent from '../components/SYBtnComponent';
import DogImg from '../assets/common/hi.png';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    height:100vh;
`

const Img = styled.img`
    width:20rem;
`

const Text = styled.div`
    font-family:'poppins';
    font-size:2rem;
    text-align:center;
    color:${props => props.theme.primary};
    margin-top:3rem;
    margin-bottom:5rem;
`

const SemiText = styled.div`
    font-family:'Spoqa-Han-Sans';
    font-size:1rem;
    text-align:center;
    color:${props => props.theme.darkGray};
    margin-top:1.9rem;
    margin-bottom:6rem;
`

const BtnToPage = styled(NavLink)`
    text-decoration: none;
    color:${props => props.theme.dark};
`

function WarningPage() {

    return (
        <Container>
            <Text>Woops! Error 404.</Text>
            <Img src={DogImg}></Img>
            <SemiText>Here's a cute picture of a doggo hehe</SemiText>
            <BtnToPage exact to='/roome_deploy'><ButtonComponent type={'result-activated'} text={'Take On Me'} /></BtnToPage>
        </Container>
    );
}

export default WarningPage;