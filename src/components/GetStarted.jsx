import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer `}>
    <div className={`${styles.flexCenter} bg-primary w-[100%] h-[100%] rounded-full flex-col`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium text-[18px] leading-[23px] text-gradient mr-2'>
          <span >Get</span>
        </p>
        <img src={arrowUp} alt="arrowup" 
          className='w-[23px] h-[23px] object-contain'
          />
      </div>

      <p className='font-poppins font-medium text-[18px] leading-[23px] text-gradient'>
          <span >Started</span>
      </p>
    </div>
  </div>
)

export default GetStarted