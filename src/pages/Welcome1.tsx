import * as React from 'react'
import pig from '../assets/images/pig.svg'
export const Welcome1: React.FC = () => {
  return (
    <div  b-1 m-16px flex flex-col items-center justify-center grow-1>
      <img src={pig} alt=""/>
      <h2 fw-400 mt-40px>
        会挣钱 <br/>
        还会省钱
      </h2>
    </div>
  )
}
