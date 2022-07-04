import React from 'react'
import styled from 'styled-components'
import FirstLayout from './FirstLayout'
import SecondLayout from './SecondLayout'

const MainCard = styled.div`
    min-height: 85vh;
    height: 85vh;
    display: flex;
    justify-content: space-around;
`
const Container = styled.div`
    margin: 2% 10% 10% 10%;
    height: 100%;
    display:flex;
    background-color: #FAF6EC;

`

const Section = styled.div`
    box-shadow: -5px 1px 10px #E5E2D3;
    width:110vh;
    background: linear-gradient(.25turn, transparent, "#FAF6EC");
`




function Content() {
    return (
        <Container>
            <MainCard>
                <Section>
                    <FirstLayout/>
                </Section>
                <Section>
                <SecondLayout/> 

                </Section>
            </MainCard>
        </Container>
    )
}

export default Content