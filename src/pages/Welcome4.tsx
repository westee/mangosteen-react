import * as React from 'react'
import cloud from "../assets/images/cloud.svg";
export const Welcome4: React.FC = () => {
  return (
      <div  b-1 m-16px flex flex-col items-center justify-center grow-1>
        <img src={cloud} alt=""/>
        <h2 fw-400 mt-40px>
            云备份 <br/>
            再也不怕数据丢失
        </h2>
      </div>
  )
}
