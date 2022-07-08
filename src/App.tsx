import React, { ReactElement, useRef } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Coffee from './modules/Coffee'
import DirtyCup from './modules/DirtyCup'
import Meter from './modules/Meter'

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    overflow-y: auto;
    background-color: #f0f0f0;
    height: 100%;
  }
  #root {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  h1 {
    padding-top: 40px;
    font-family: Helvetica;
    font-style: bold;
    font-size: 90px;
    text-align: center;
  } 

  * {
    box-sizing: border-box;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: scale(0.7);
  flex: 0 0 300px;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  gap: 200px;
  padding: 0 200px;
  flex: 1;
`
const Floor = styled.div`
  flex: 1;
  background-color: #d0d0d0;
  display: flex;
  padding: 100px 200px;
  justify-content: space-around;
`
const EmptyCups = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap-reverse;
`
const Machine = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex: 0 0 60%;
`
const Input = styled.input`
  flex: 1;
  border: none;
  background-color: white;
  font-family: Helvetica;
  font-style: bold;
  font-size: 90px;
  text-align: center;
`

function App() {
  const [dirtyCups, setDirtyCups] = React.useState<Array<[string, number]>>([])
  const [name, setName] = React.useState<string>('')
  const [filled, setFilled] = React.useState<boolean>(false)
  const [members, setMembers] = React.useState<Record<string, number>>({})

  console.log(members)
  const createMember = () => {
    setMembers({ ...members, [name]: 0 })
    setName('')
  }
  const drink = (name: string) => {
    if (filled) {
      setMembers({ ...members, [name]: members[name] + 1 })
      setDirtyCups([...dirtyCups, [name, Math.random()]])
      setFilled(false)
    }
  }
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <h1>Count your coffees!</h1>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={(event) => {
              if (event.key === 'Enter') createMember()
            }}
            maxLength={7}
          />
        </Header>
        <Wrapper>
          <Machine>
            <Coffee
              onDrink={() =>
                members.length > 0 ? drink(Object.keys(members)[0]) : {}
              }
              filled={filled}
              onFill={() => setFilled(true)}
            />
          </Machine>
          <EmptyCups>
            {dirtyCups.map(([name, random], index) => (
              <DirtyCup key={index} name={name} random={random} />
            ))}
          </EmptyCups>
        </Wrapper>
        <Floor>
          <div style={{ transform: 'scale(0.7)' }}>
            {Object.entries(members).map(([member, coffees], index) => {
              console.log(member, coffees)
              return (
                <div onClick={() => drink(member)}>
                  <Meter key={index} name={member} coffees={coffees} />
                </div>
              )
            })}
          </div>
        </Floor>
      </Container>
    </>
  )
}

export default App
