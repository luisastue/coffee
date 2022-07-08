import React, { useEffect, useState } from 'react'
import styled, { createGlobalStyle, keyframes } from 'styled-components'
import { ReactComponent as CoffeeMachine } from '../coffee-machine.svg'
import { BUTTON_DURATION, DROP_DURATION, FILL_DURATION } from '../constants'

type DirtyProps = {
  name: string
  index: number
}

const CupDiv = styled.div`
  position: relative;
  left: -20px;
`

const NameDiv = styled.div`
  position: relative;
  top: -120px;
  left: 20px;
`

const Label = styled.p`
  font-family: Helvetica;
  font-weight: 900;
  font-style: bold;
  font-size: 26px;
  text-align: center;
  text-transform: uppercase;
`

const Cup = (props: DirtyProps) => {
  const id = `${props.name}-${props.index}`

  return (
    <CupDiv>
      <svg
        width="184"
        height="109"
        viewBox="0 0 184 109"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M174.995 6V33.234C174.995 69.335 145.735 98.596 109.633 98.596C73.531 98.596 44.271 69.336 44.271 33.234V6H174.995Z"
          fill="white"
        />
        <path
          d="M42.484 65.363C53.975 91.019 79.751 108.936 109.633 108.936C150.179 108.936 183.165 75.95 183.165 35.404V8.17001C183.165 3.65801 179.507 0 174.995 0H12.543C9.627 0 6.932 1.55501 5.471 4.07901C1.891 10.265 0 17.331 0 24.512C0 47.038 18.325 65.363 40.851 65.363H42.484ZM52.442 16.34H166.825V35.404C166.825 66.94 141.169 92.595 109.634 92.595C78.099 92.595 52.443 66.939 52.443 35.404V16.34H52.442ZM16.341 24.512C16.341 21.715 16.818 18.95 17.738 16.341H36.102V35.405C36.102 39.968 36.519 44.435 37.319 48.77C25.472 47.052 16.341 36.828 16.341 24.512Z"
          fill="black"
        />
      </svg>

      <NameDiv>
        <Label>{props.name}</Label>
      </NameDiv>
    </CupDiv>
  )
}

export default Cup
