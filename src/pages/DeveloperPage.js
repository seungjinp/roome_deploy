import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Parser from 'html-react-parser';
import BoxComponent from '../components/BoxComponent';
import developers from './contents/developers';
import ButtonComponent from '../components/SYBtnComponent';

const Wrapper = styled.div`
    display: flex;
    width:100%;

    flex-direction:column;
    align-items:center;

    margin-bottom:10rem;
`

const Text = styled.div`
    margin-top: ${props => props.top};
    margin-bottom: ${props => props.bottom};

    font-family: ${props => props.font || 'poppins'};
    font-style: normal;
    font-weight: ${props => props.fontWeight || 'bold'};;
    font-size: ${props => props.fontSize || '20px'};
    color: ${props => props.color || 'black'};
    text-align: center;
    display: ${props => props.display};
`

const BtnToPage = styled(NavLink)`
    text-decoration: none;
    color:${props => props.theme.dark};
`


function DeveloperPage() {

    const imgStyles = {
        margin: '0 1rem 0 1rem',
        width: '10.3rem'
    }

    window.scrollTo(0, 0);

    return (
        <>
            <Text>
                <Text font='poppins' fontWeight='400' fontSize='1.2rem' top='10.2rem' bottom='5rem'>
                    치즈먹고싶다 👀
            </Text>
                <Text>🏠</Text>
                <Text display='inline-block' top='2.1rem' color='#E4A0B7'>Roome</Text>
                <Text display='inline-block'>를 만든</Text>
                <Text top='1rem' bottom='5.8rem'>제작자를 소개합니다</Text>
            </Text>
            <Wrapper>
                {developers.map((developers, i) => (
                    <BoxComponent
                        key={'contents-' + i}
                        src={developers.src}
                        title={Parser(developers.title)}
                        color={developers.color}
                        name={developers.type}
                        developer={developers.name}
                        subDesc={developers.subDesc}
                        style={imgStyles}
                        site={developers.site}
                        type={'dev'}
                    />
                ))}
                <Text top='4.2rem' fontSize='1.2rem'>Special thanks to...</Text>
                <Text top='4.2rem' color='#00462A'>Saerom Choi</Text>
                <Text top='1.7rem' bottom='19.4rem' font='poppins' fontWeight='400' fontSize='1.2rem'>도와주셔서 감사합니다 예아</Text>
                <BtnToPage exact to='/roome_deploy'><ButtonComponent type={'others-activated'} text={'Take it again!'} /></BtnToPage>
                <BtnToPage exact to='/all'><ButtonComponent type={'others-unactivated'} text={'Find other Roome'} /></BtnToPage>
            </Wrapper>
        </>
    );
}

export default DeveloperPage;