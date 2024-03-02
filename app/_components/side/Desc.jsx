import React from 'react'
import Image from 'next/image'
import "./desc.css"
import Follow from '../btns/Follow'
function Desc() {
  return (
    <div className="desc-side flex flex-col justify-center items-center lg:w-[407px] sm:w-[343px] sm:gap-[16px] h-[391px] rounded-[21px]">
      <div className="main flex flex-col sm:p-[16px] gap-[16px] h-[343px]">
        <Image 
        className="rounded-[24px] lg:w-[100px] h-[100px] sm:w-[80px] sm:h-[80px]"
        alt="Description-img"
        src="/img/person.jpg"
        width={100}
        height={100}
        />
        <div className="flex flex-col h-[227px] gap-[24px]">
          <div className="flex flex-col gap-[11px]">
            <h1 className="h1 text-[24px] font-bold leading-[23px] sm:text-[18px]">Hala Ahmed</h1>
            <p className="p text-[14px] font-normal leading-[19px]">I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Mackeup and Skin Care.</p>
          </div>
          <div className="flex sm:w-[312px] sm:h-[59px] h-[59px] gap-[17px]">
            <Follow img="/img/user.svg" h2="5" p="Following"/>
            <Follow img="/img/user2.svg" h2="20" p="Followers"/>
            <Follow img="/img/star.svg" h2="4.2" p="Rate"/>
          </div>
          <button className="btnn rounded-[14px] h-[48px] lg:w-full sm:w-[311px] sm:h-[48px]">
            Follow
          </button>
        </div>
      </div>
    </div>
  )
}

export default Desc
