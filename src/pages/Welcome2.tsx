import * as React from 'react'
import clock from "../assets/images/clock.svg";
export const Welcome2: React.FC = () => {
  return (
      <div  b-1 m-16px flex flex-col items-center justify-center grow-1>
        <img src={clock} alt=""/>
        <h2 fw-400 mt-40px>
            每日提醒 <br/>
            不遗漏每一笔账单
        </h2>
      </div>
  )
}
