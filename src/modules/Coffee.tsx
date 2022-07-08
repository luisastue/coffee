import React, { useEffect, useImperativeHandle, useState } from 'react'
import styled, { createGlobalStyle, keyframes } from 'styled-components'
import { ReactComponent as CoffeeMachine } from '../coffee-machine.svg'
import { BUTTON_DURATION, DROP_DURATION, FILL_DURATION } from '../constants'
import Liquid from './Liquid'
import Handle from './Handle'

//handle, handle-line, cup-fill are ids defined in the svg
const Machine = styled.div`
  position: relative;
  left: -60px;
  .turn #button {
    transform: rotate(-90deg);
    transform-box: fill-box;
    transform-origin: center;
    transition: transform ${BUTTON_DURATION}s linear;
  }
  .turnBack #coffee {
    transform: scaleY(0);
  }
  .turn #coffee {
    transition: transform ${DROP_DURATION}s linear ${BUTTON_DURATION}s,
      visibility 0.1s linear ${BUTTON_DURATION + DROP_DURATION + FILL_DURATION}s;
    visibility: hidden;
    transform: scaleY(1);
    transform-box: fill-box;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes fill {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-80px);
    }
  }
  #liquid {
    transform-box: fill-box;
    transform-origin: center;
    animation: animate 7s linear infinite;
  }
  #surface {
    transform-box: fill-box;
    transform-origin: center;
    animation: animate 7s linear infinite;
    animation-direction: reverse;
  }

  .filled {
    animation: fill ${FILL_DURATION}s linear ${BUTTON_DURATION + DROP_DURATION}s;
    animation-fill-mode: forwards;
  }
`

type CoffeeProps = {
  onDrink: () => void
  onFill: () => void
  filled: boolean
}
const Coffee = (props: CoffeeProps) => {
  const [clicked, setClicked] = useState(props.filled)

  useEffect(() => {
    setClicked(props.filled)
  }, [props.filled])

  useEffect(() => {
    if (clicked) props.onFill()
  }, [clicked])

  return (
    <Machine>
      <div className={clicked ? 'turn' : 'turnBack'}>
        <svg
          width="512"
          height="512"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2_2)">
            <Liquid
              filled={clicked}
              onClick={() => {
                setClicked(false)
                props.onDrink()
              }}
            />

            <line
              id="coffee"
              x1="212"
              y1="214"
              x2="212"
              y2="383"
              stroke="#66402B"
              stroke-width="6"
            />
            <path
              id="cup"
              d="M145.276 350.363C156.767 376.019 182.543 393.936 212.425 393.936C252.971 393.936 285.957 360.95 285.957 320.404V293.17C285.957 288.658 282.299 285 277.787 285H115.335C112.419 285 109.724 286.555 108.263 289.079C104.683 295.265 102.792 302.331 102.792 309.512C102.792 332.038 121.117 350.363 143.643 350.363H145.276ZM155.234 301.34H269.617V320.404C269.617 351.94 243.961 377.595 212.426 377.595C180.891 377.595 155.235 351.939 155.235 320.404V301.34H155.234ZM119.133 309.512C119.133 306.715 119.61 303.95 120.53 301.341H138.894V320.405C138.894 324.968 139.311 329.435 140.111 333.77C128.264 332.052 119.133 321.828 119.133 309.512Z"
              fill="black"
            />
            <path
              d="M155.234 471.149H111.66V503.83H155.234V471.149Z"
              fill="#22455B"
            />
            <path
              d="M487.489 471.149H443.915V503.83H487.489V471.149Z"
              fill="#22455B"
            />
            <path
              id="button-fill"
              onClick={() => setClicked(true)}
              d="M416.681 122.553C439.242 122.553 457.532 104.263 457.532 81.702C457.532 59.1406 439.242 40.851 416.681 40.851C394.12 40.851 375.83 59.1406 375.83 81.702C375.83 104.263 394.12 122.553 416.681 122.553Z"
              fill="#CAFEFF"
            />
            <path
              d="M95.319 8.17V89.872C95.319 107.846 110.025 122.553 128 122.553H329.532V471.149H503.83V8.17H95.319ZM416.681 122.553C394.12 122.553 375.83 104.263 375.83 81.702C375.83 59.141 394.12 40.851 416.681 40.851C439.242 40.851 457.532 59.141 457.532 81.702C457.532 104.263 439.242 122.553 416.681 122.553Z"
              fill="#9AABB6"
            />
            <path
              d="M128 389.447C110.026 389.447 95.319 404.153 95.319 422.128V471.149H329.532V389.447H128Z"
              fill="#6D8393"
            />

            <Handle />
            <path
              d="M160.681 122.553V171.574C160.681 180.561 168.034 187.914 177.021 187.914H247.83C256.817 187.914 264.17 180.561 264.17 171.574V122.553H160.681V122.553Z"
              fill="#CAFEFF"
            />
            <path
              d="M384 397.617C388.512 397.617 392.17 393.959 392.17 389.447C392.17 384.935 388.512 381.277 384 381.277C379.488 381.277 375.83 384.935 375.83 389.447C375.83 393.959 379.488 397.617 384 397.617Z"
              fill="black"
            />
            <path
              d="M384 348.596C388.512 348.596 392.17 344.938 392.17 340.426C392.17 335.914 388.512 332.256 384 332.256C379.488 332.256 375.83 335.914 375.83 340.426C375.83 344.938 379.488 348.596 384 348.596Z"
              fill="black"
            />
            <path
              d="M384 299.574C388.512 299.574 392.17 295.916 392.17 291.404C392.17 286.892 388.512 283.234 384 283.234C379.488 283.234 375.83 286.892 375.83 291.404C375.83 295.916 379.488 299.574 384 299.574Z"
              fill="black"
            />
            <path
              id="button"
              d="M416.681 130.723C443.711 130.723 465.702 108.732 465.702 81.702C465.702 54.672 443.711 32.681 416.681 32.681C389.651 32.681 367.66 54.672 367.66 81.702C367.66 108.732 389.651 130.723 416.681 130.723ZM416.681 49.021C434.701 49.021 449.362 63.682 449.362 81.702C449.362 99.722 434.701 114.383 416.681 114.383C401.481 114.383 388.671 103.952 385.034 89.872H424.851C429.363 89.872 433.021 86.214 433.021 81.702C433.021 77.19 429.363 73.532 424.851 73.532H385.034C388.671 59.452 401.481 49.021 416.681 49.021Z"
              fill="black"
            />
            <path
              d="M155.234 495.66H111.66C107.148 495.66 103.49 499.318 103.49 503.83C103.49 508.342 107.148 512 111.66 512H155.234C159.746 512 163.404 508.342 163.404 503.83C163.404 499.318 159.746 495.66 155.234 495.66Z"
              fill="black"
            />
            <path
              d="M487.489 495.66H443.915C439.403 495.66 435.745 499.318 435.745 503.83C435.745 508.342 439.403 512 443.915 512H487.489C492.001 512 495.659 508.342 495.659 503.83C495.659 499.318 492.001 495.66 487.489 495.66Z"
              fill="black"
            />
            <path
              id="machine-outline"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M503.83 0H95.319C90.807 0 87.149 3.658 87.149 8.17V89.872C87.149 112.398 105.474 130.723 128 130.723H152.511C152.511 130.723 152.511 150 152.511 163.404C152.511 169.809 153.917 179.745 153.917 179.745C157.29 189.254 166.371 196.085 177.022 196.085H199.26L204.256 206.702C206 211 207.914 214.872 212.426 214.872C216.938 214.872 219 210.5 220.596 206.702L225.6 196.085H247.83C261.346 196.085 272.341 185.09 272.341 171.574V130.723H321.362V381.276H128C105.474 381.276 87.149 399.601 87.149 422.127V471.148C87.149 475.66 90.807 479.318 95.319 479.318H503.83C508.342 479.318 512 475.66 512 471.148V8.17C512 3.658 508.342 0 503.83 0ZM247.83 179.744C252.335 179.744 256 176.08 256 171.574V130.723H168.851V171.574C168.851 176.079 172.515 179.744 177.021 179.744H247.83ZM103.49 462.979H495.66L495.659 16.34H103.489V89.872C103.489 103.388 114.484 114.383 128 114.383H329.533C334.045 114.383 337.703 118.041 337.703 122.553V438.468C337.703 442.98 334.045 446.638 329.533 446.638C325.021 446.638 321.363 442.98 321.363 438.468V397.617H128.001C114.485 397.617 103.49 408.612 103.49 422.128V462.979Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_2">
              <rect width="512" height="512" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </Machine>
  )
}

export default Coffee
