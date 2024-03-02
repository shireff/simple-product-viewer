import React from "react";
import Image from "next/image";
import ".//pro.css";
function Products(props) {
  const { cls, img, subImg } = props;
  return (
    <div className="flex gap-[10px] flex-row lg:w-[768px] sm:w-[343px] h-[127px] sm:h-[132px]">
      <div className="pro-img lg:w-[115px] lg:h-[127px] sm:w-[85px] sm:h-[116px]">
        <Image
          className="rounded-[28px] sm:w-[87px] sm:h-[72.2px]"
          alt="product-img"
          src={img}
          width={150}
          height={150}
        />
        <div
          className={`${cls} text-white lg:w-[114px] sm:w-[66px] sm:h-[20px] flex justify-center items-center live`}
        >
          <h2 className="text-[12px] sm:text-[8px] sm:leading-[10.91px] font-normal leading-[16.37px]">
            Live Auction
          </h2>
        </div>
      </div>
      <div className="flex lg:w-[792px] sm:w-[224px] sm:h-[116px] justify-between">
        <div className="main-content flex flex-col gap-[8px]">
          <h2 className="lg:text-[20px] sm:text-[12px] sm:landscape-[16px]">Six-piece clothing set (blouse - pants - hat and ...)</h2>
          <span className="lg:text-[24px] font-normal landscape-[32.23px] sm:text-[12px] sm:landscape-[16px]">
            starting price <strong>1000 EGP</strong>{" "}
          </span>
          <div className="flex sm:block justify-center items-center">
            <div className="lg:text-[18px] sm:text-[12px] sm:landscape-[16px]">
              <span>Lot starts in</span>
            </div>
            <div className="flex justify-center items-center gap-[16px]">
              <span className="lg:w-[105px] h-[40px] rounded-[24px] text-[14px] font-normal leading-[19.1px] p-[10px] sm:text-[8px] sm:w-[57px] sm:h-[28px] sm:p-[5px] days">
                2 <strong>Days</strong>{" "}
              </span>
              <span className="lg:w-[105px] h-[40px] rounded-[24px] text-[14px] font-normal leading-[19.1px] p-[10px] sm:text-[8px] sm:w-[57px] sm:h-[28px] sm:p-[5px] days">
                10 <strong>Hours</strong>{" "}
              </span>
              <span className="lg:w-[105px] h-[40px] rounded-[24px] text-[14px] font-normal leading-[19.1px] p-[10px] sm:text-[8px] sm:w-[57px] sm:h-[28px] sm:p-[5px] days">
                50 <strong>Minutes</strong>{" "}
              </span>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="rounded-[28px]"
            alt="product-img"
            src={subImg}
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
