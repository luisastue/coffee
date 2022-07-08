import React, { useEffect, useState } from 'react'
import styled, { createGlobalStyle, keyframes } from 'styled-components'
import { ReactComponent as CoffeeMachine } from '../coffee-machine.svg'
import { BUTTON_DURATION, DROP_DURATION, FILL_DURATION } from '../constants'

type DirtyProps = {
  name: string
  random: number
}
const DirtyCup = (props: DirtyProps) => {
  const random = props.random
  const id = Math.floor(random * 100)
  const angle = (random < 0.5 ? -1 : 1) * random * 20
  const flipped = random < 0.5

  const Cup = styled.div`
    #dirty-cup-${id} {
      transform: rotate(${angle}deg) ${flipped ? 'scaleX(-1)' : ''};
    }
    #dirty-cup-label-${id} {
      transform: rotate(${angle}deg) ${flipped ? 'translateX(-40px)' : ''};
    }
    height: 110px;
  `
  const NameDiv = styled.div`
    position: relative;
    top: -120px;
    left: 20px;
    height: 0;
  `

  const Label = styled.p`
    font-family: Helvetica;
    font-weight: 900;
    font-style: bold;
    font-size: 26px;
    text-align: center;
    text-transform: uppercase;
    height: 0;
  `

  return (
    <Cup>
      <svg
        id={`dirty-cup-${id}`}
        width="184"
        height="110"
        viewBox="0 0 184 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M174.226 7.23132V34.4653C174.226 70.5663 144.966 99.8273 108.864 99.8273C72.7618 99.8273 43.5018 70.5673 43.5018 34.4653V7.23132H174.226Z"
          fill="white"
        />
        <path
          d="M175.334 3.3878V30.6218C175.334 66.7228 146.074 95.9838 109.972 95.9838C73.8696 95.9838 44.6096 66.7238 44.6096 30.6218V3.3878H175.334Z"
          fill="white"
        />
        <path
          d="M169.834 8.8878V30.6218C169.834 63.6853 143.036 90.4838 109.972 90.4838C76.9071 90.4838 50.1096 63.6862 50.1096 30.6218V8.8878H169.834Z"
          stroke="#66402B"
          stroke-opacity="0.3"
          stroke-width="11"
        />
        <ellipse
          cx="85.7009"
          cy="11.5446"
          rx="18.4518"
          ry="7.7801"
          transform="rotate(-3.9232 85.7009 11.5446)"
          fill="#66402B"
        />
        <ellipse
          rx="11.4059"
          ry="7.47609"
          transform="matrix(0.960891 0.276926 0.276926 -0.960891 161.372 16.7782)"
          fill="#66402B"
        />
        <path
          d="M61.4441 21.0013C60.4823 26.3326 64.749 39.8806 60.7244 40.0513C55.0309 40.2928 58.92 31.9461 55.8067 21.2404C46.6481 7.17254 58.5437 12.0915 60.1004 12.0255C61.6571 11.9594 63.8294 7.78016 61.4441 21.0013Z"
          fill="#B6A79E"
        />
        <path
          d="M63.9652 35.4962C65.1647 38.698 62.9822 41.1678 61.0031 41.2517C59.024 41.3357 56.1704 38.6192 56.7983 35.8003C58.5427 26.7798 56.208 19.2551 58.0498 18.1894C59.8915 17.1237 58.8439 21.8263 63.9652 35.4962Z"
          fill="#B6A79E"
        />
        <ellipse
          cx="61.7704"
          cy="16.639"
          rx="8.84244"
          ry="2.61102"
          transform="rotate(-3.9232 61.7704 16.639)"
          fill="#66402B"
        />
        <path
          d="M42.9858 65.5943C54.4768 91.2503 80.2528 109.167 110.135 109.167C150.681 109.167 183.667 76.1813 183.667 35.6353V8.40134C183.667 3.88934 180.009 0.231323 175.497 0.231323L13.0448 0.231323C10.1288 0.231323 7.43383 1.78633 5.97283 4.31033C2.39283 10.4963 0.501831 17.5623 0.501831 24.7433C0.501831 47.2693 18.8268 65.5943 41.3528 65.5943H42.9858ZM52.9438 16.5713L167.327 16.5713V35.6353C167.327 67.1713 141.671 92.8263 110.136 92.8263C78.6008 92.8263 52.9448 67.1703 52.9448 35.6353V16.5713H52.9438ZM16.8428 24.7433C16.8428 21.9463 17.3198 19.1813 18.2398 16.5723H36.6038V35.6363C36.6038 40.1993 37.0208 44.6663 37.8208 49.0013C25.9738 47.2833 16.8428 37.0593 16.8428 24.7433Z"
          fill="black"
        />
      </svg>

      <NameDiv id={`dirty-cup-label-${id}`}>
        <Label>{props.name}</Label>
      </NameDiv>
    </Cup>
  )
}

export default DirtyCup
