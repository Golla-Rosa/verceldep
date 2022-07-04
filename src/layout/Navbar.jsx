import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  display: flex;
  justify-content: space-between;

`
const CentralItem = styled.div`
display: flex;
flex-direction: column;
`
export default function Navbar() {
  return (
    <Container>
        <div>
          CONTACT
        </div>
        <CentralItem>
          <div><b>Jeune Golla</b></div>
          <div>Artisanat numérique</div>
        </CentralItem>
        <div>
          Menu
        </div>


    </Container>
  )
}
