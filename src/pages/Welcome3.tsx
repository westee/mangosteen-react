import * as React from 'react'
import chart from "../assets/images/chart.svg";
export const Welcome3: React.FC = () => {
  return (
      <div  b-1 m-16px flex flex-col items-center justify-center grow-1>
        <img src={chart} alt=""/>
        <h2 fw-400 mt-40px>
            数据可视化 <br/>
            收支一目了然
        </h2>
      </div>
  )
}
