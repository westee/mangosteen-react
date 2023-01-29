import * as React from 'react'
import pig from '../assets/images/pig.svg'
export const Welcome1: React.FC = () => {
  return (
    <div flex b-1 b-blue text="sm red">
      <img src={pig} alt=""/>
      <h1>
        会挣钱 <br/>
        还会省钱
      </h1>
    </div>
  )
}
