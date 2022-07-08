import React, { useEffect, useState } from 'react'
import styled, { createGlobalStyle, keyframes } from 'styled-components'
import { ReactComponent as CoffeeMachine } from '../coffee-machine.svg'
import { BUTTON_DURATION, DROP_DURATION, FILL_DURATION } from '../constants'

type LiquidProps = {
  filled: boolean
  onClick: () => void
}
const Liquid = (props: LiquidProps) => {
  const [filled, setFilled] = useState(props.filled)

  useEffect(() => {
    setFilled(props.filled)
    console.log(`c: ${props.filled}`)
  }, [props.filled])

  return (
    <>
      <path
        id="cup-fill"
        d="M277.787 291V318.234C277.787 354.335 248.527 383.596 212.425 383.596C176.323 383.596 147.063 354.336 147.063 318.234V291H277.787Z"
        fill="#66402B"
      />
      <g className={filled ? 'filled liquid' : 'empty liquid'}>
        <rect
          id="liquid"
          x="10"
          y="0"
          width="400"
          height="400"
          rx="190"
          fill="#f0f0f0"
          fill-opacity="1"
        />

        <rect
          onClick={props.onClick}
          id="surface"
          className={filled ? 'filled surface' : 'empty surface'}
          x="-90"
          y="390"
          width="600"
          height="600"
          rx="290"
          fill-opacity="0.5"
          fill="#66402B"
        />
      </g>

      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M512 512L512 -8.13735e-06L8.34154e-05 -3.05176e-05L6.10352e-05 512H512ZM269.617 301.34H155.235V320.404C155.235 351.939 180.891 377.595 212.426 377.595C243.961 377.595 269.617 351.94 269.617 320.404V301.34Z"
        fill="#F0F0F0"
      />
    </>
  )
}

export default Liquid
