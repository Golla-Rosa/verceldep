import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%
`


const Item = styled.div`
    flex: 1 1 0;
    width: 100%;
    flex-grow: ${props => props.grow}
`
const Title = styled.div`
    height: 100%;
    display:flex;
    flex-direction: column;
    text-align: center;
    max-height: 20%;
`

const Heading = styled.h1`
    font-size: ${props => 8.333 / props.size}rem;
    margin: 0;
`

const Relative = styled.div`
    position: relative;
    height: 100%;
`

const Column = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`

const Card = styled.div`
  height: ${props => props.height}%;
  width: ${props => props.width}%;
  position: absolute;
  background: ${props => props.color};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  box-shadow: 1px 2px 3px rgba(0,0,0,.5);
`

const A = styled.div`
font-family: Papyrus
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-height: 60vh;
`

function SecondLayout() {
    return (
        <Layout>
            <Item grow={3}>
                <Column>
                    <Item grow={10}>
                        <Relative>
                            <Card className="bounce" color='#756F5F' height="100" width="100">
                                <Column>
                                    <Item grow={1}></Item>
                                    <Item grow={10}>
                                        
                                        <Card >
                                            {/* <Image src="https://source.unsplash.com/random"></Image> */}

                                        </Card>
                                    </Item>
                                </Column>
                            </Card>
                            <Card className="bounce" color="#B6A980" height="60" width="80">
                                <Layout>
                                    <Item grow={10}></Item>
                                    <Item grow={1}>
                                            <Heading>Interior design</Heading>
                                    </Item>
                                </Layout>

                            </Card> 1
                        </Relative>
                    </Item>
                    <Item grow={5}>
                        
                    </Item>


                </Column>
            </Item>
            <Item grow={1}>
                <Title>
                    <Heading size="1">
                        <A>
                        </A>
                    </Heading>

                </Title>
            </Item>
        </Layout>
    )
}

export default SecondLayout