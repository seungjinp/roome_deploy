import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Parser from 'html-react-parser'
import results from './contents/results';
import BoxComponent from '../components/BoxComponent';
import ButtonComponent from '../components/SYBtnComponent';

const Wrapper = styled.div`
    display: flex;
    width:100%;

    flex-direction: ${props => props.flex || 'column'};
    align-items:center;
`

const Text = styled.div`
    margin-top: ${props => props.top};
    margin-bottom: ${props => props.bottom};

    font-family: 'poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    color: ${props => props.color || 'black'};
    text-align: center;
    display: ${props => props.display};
`

const SmallText = styled(Text)`
    margin-top: 74px;
    margin-bottom: 30px;
    font-family: 'poppins';

    font-weight: 500;
    font-size: 12px;

    color: #A7A7A7;
`

const DeveloperPageLink = styled.div`
    color: '#1F1F1F';
    text-align:center;
    font-family:'poppins';
    font-weight:400;
    font-size:1.2rem;
    margin-top:6.3rem;
`

const BtnToPage = styled(NavLink)`
    text-decoration: none;
    color:${props => props.theme.dark};
`


function AllResultPage() {

    results.splice(16, 1);
    window.scrollTo(0, 0);

    const styles = {
        width: '13.9rem',
        height: '12rem',
    }

    return (
        <>
            <Text>
                <Text top='13.1rem' bottom='2.1rem'>🏠</Text>
                <Text display='inline' >Find &nbsp;</Text>
                <Text display='inline' bottom='0px'>All</Text>
                <Text top='1rem' color='#E18AAA' bottom='8.9rem'>Roome Types</Text>
            </Text>
            <Wrapper>
                {results.map((results, i) => (
                    <BoxComponent
                        key={'contents-' + i}
                        src={results.img}
                        title={Parser(results.title)}
                        name={results.name}
                        subDesc={results.subdesc}
                        style={styles}
                    />
                ))}
                <Text bottom='74px' />
                <BtnToPage exact to='/'><ButtonComponent type={'others-activated'} text={'Take it Again!'} /></BtnToPage>
                <BtnToPage exact to='/makers'><DeveloperPageLink><SmallText>Who made this test?</SmallText></DeveloperPageLink></BtnToPage>
            </Wrapper>
        </>
    );
}

export default AllResultPage;