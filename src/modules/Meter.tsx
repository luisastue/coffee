import React, { useEffect, useState } from 'react'
import styled, { createGlobalStyle, keyframes } from 'styled-components'
import { ReactComponent as CoffeeMachine } from '../coffee-machine.svg'
import { BUTTON_DURATION, DROP_DURATION, FILL_DURATION } from '../constants'
import Cup from './Cup'

type MeterProps = {
  name: string
  coffees: number
}
const Meter = (props: MeterProps) => {
  const [coffees, setCoffees] = useState(props.coffees)
  const [previousCoffees, setPreviousCoffees] = useState(0)

  useEffect(() => {
    if (props.coffees != coffees) {
      setCoffees(props.coffees)
      setTimeout(() => {
        setPreviousCoffees(props.coffees)
      }, FILL_DURATION * 1000)
    }
  }, [props.coffees])

  const MeterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;

    #surface-level-${props.name} {
      animation: fill-meter-${props.name} ${FILL_DURATION}s linear;
      animation-fill-mode: forwards;
    }

    .liquid-${props.name} {
      transform-box: fill-box;
      transform-origin: center;
      animation: animate 7s linear infinite;
    }
    .surface-${props.name} {
      transform-box: fill-box;
      transform-origin: center;
      animation: animate 7s linear infinite;
      animation-direction: reverse;
    }
    @keyframes fill-meter-${props.name} {
      0% {
        transform: translateY(${previousCoffees * -80}px);
      }
      100% {
        transform: translateY(${coffees * -80}px);
      }
    }

    @keyframes animate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `

  return (
    <MeterDiv>
      <Cup name={props.name} index={1} />
      <svg
        width="163"
        height="700"
        viewBox="0 0 163 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_22_131)">
          <path
            d="M147 0L147 624.67C147 656.277 118.888 684 81.5 684C44.1116 684 16 656.278 16 624.67L16 0H147Z"
            fill="#66402B"
          />
          <g id={`surface-level-${props.name}`}>
            <rect
              className={`surface-${props.name}`}
              x="-120"
              y="310"
              width="400"
              height="400"
              rx="190"
              fill="#f0f0f0"
              fill-opacity="1"
            />

            <rect
              className={`liquid-${props.name}`}
              x="-210"
              y="690"
              width="600"
              height="600"
              rx="290"
              fill-opacity="0.5"
              fill="#66402B"
            />
            <rect x="0" y="-400" width="300" height="800" fill="#f0f0f0" />
          </g>
          <path
            d="M155 -8L155 624.67C155 661.277 122.702 692 81.5 692C40.298 692 8 661.278 8 624.67L8.00002 -8H155Z"
            stroke="black"
            stroke-width="16"
          />

          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M163 589L163 624.67C163 666.276 126.516 700 81.5 700C36.4843 700 0 666.278 0 624.67V700H81.5H163V589Z"
            fill="#d0d0d0"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_131">
            <rect width="163" height="700" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </MeterDiv>
  )
}

export default Meter
