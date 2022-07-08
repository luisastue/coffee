import React, { useState } from 'react'
import styled, { createGlobalStyle, keyframes } from 'styled-components'
import { ReactComponent as CoffeeMachine } from '../coffee-machine.svg'

const trOrg = `210px 170px`
const transformation = `rotate(-10deg) scaleX( 0.8)` //scaleX( 0.8);

//handle, handle-line, cup-fill are ids defined in the svg
const HandleStyle = createGlobalStyle`
  #handle-turn,
  #handle-line-turn {
    transform-origin: ${trOrg};
    transform: ${transformation};
    transition: transform 0.2s linear;
  }

  #handle-turnBack,
  #handle-line-turnBack {
    transform-origin: ${trOrg};
    transform: rotate(0) scaleX(1);
    transition: transform 0.2s linear;
  }
`

const Handle = () => {
  const [handleTurned, setHandleTurned] = useState(false)
  return (
    <>
      <HandleStyle />
      <path
        onClick={() => setHandleTurned(!handleTurned)}
        id={handleTurned ? 'handle-turn' : 'handle-turnBack'}
        d="M10.17 147.064V196.085L130 187.915V155.234L10.17 147.064Z"
        fill="#22455B"
        stroke="black"
        stroke-width="16"
        stroke-linejoin="round"
      />
      <line
        id={handleTurned ? 'handle-line-turn' : 'handle-line-turnBack'}
        x1="129"
        y1="172"
        x2="161"
        y2="172"
        stroke="black"
        stroke-width="16"
      />
    </>
  )
}

export default Handle
