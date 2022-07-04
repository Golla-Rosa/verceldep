import React from 'react'
import styled from 'styled-components'

const Row = styled.div`
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
  font-family:Papyrus

`

const Column = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`

const Card = styled.div`
  height: 100%;
  background: ${props => props.color};
  box-shadow: 1px 2px 3px rgba(0,0,0,.5);
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-height: 60vh;
`
function FirstLayout() {
  return (
    <Row>
      <Item grow={2}>
        <Column>
          <Item grow={5}>
            .
          </Item>
          <Item grow={5}>
            <Card color='white'>
              <Column>
                <Item grow={1}></Item>
                <Item grow={8}>
                  <Card>
                    <Image src="https://source.unsplash.com/random"></Image>

                  </Card>
                </Item>
              </Column>
            </Card>
          </Item>

        </Column>
      </Item>
      <Item grow={1}>
        <Title>
          <Heading size="1">
          </Heading>
         
        </Title>
      </Item>
    </Row>
  )
}

export default FirstLayout