import React from 'react';
import styled from 'styled-components';

//type에 따라서 초록 버튼인지 회색 테두리 버튼인지 결정하게 수정하면 편함

const Button = styled.div`
    width: 29.2rem;
    height: 7rem;

    border-radius: 1.5rem;
    background-color: ${props =>
        props.type === true ? '#ECBDC4'
            : props.type === 'result' ? '#ECBDC4'
                : props.theme.white};
    cursor:pointer;
    margin : 1.5rem;
   
    color:${props =>
        props.type === 'result' ? 'white'
            : 'black'};
    display:flex;
    justify-content:center;
    align-items:center;
    font-family:${props => props.type === 'result' ? 'Poppins' : 'Poppins'};
    font-weight: 400;
    font-size:1.5rem;
    text-align:center;
    border:${props => props.type === 'result' ? '3px solid #ECBDC4' : '3px solid lightgray'};

    /* :hover{
        background-color: ${props => '#ECBDC4'};
        border:3px solid #ECBDC4;
        color:white;
    } */

`

function ButtonComponent({ idx, type, text, onclick }) {

    const onClickBtn = () => {
        onclick(idx);
    }

    return (
        <Button type={type} onClick={onClickBtn}>{text}</Button>
    );

}

export default ButtonComponent;