import React from 'react'
import Image from 'next/image'
import ".//follow.css"
function Follow(props) {
  const {img, h2, p} = props
  return (
    <div className="flex flex-row items-center gap-[2px] w-[108px] h-[59px] rounded-[18px] p-[5px] fo-main">
      <Image
      className="fo-icon"
      alt="tip"
      src={img}
      width={24}
      height={24}
       />
       <div>
        <h2 className="text-[14px] font-bold leading-[19.1px]">{h2}</h2>
        <p className="text-[12px] font-normal leading-[16.37px] pp">{p}</p>
       </div>
    </div>
  )
}

export default Follow
