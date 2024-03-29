
import React from "react";
import Image from "next/image";
import ".//pro.css";

function Products(props) {
  const { cls, img, subImg } = props;

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:w-[768px] sm:w-full sm:h-[auto]">
      <div className="pro-img lg:w-[115px] lg:h-[127px] sm:w-[85px] sm:h-[116px]">
        <Image
          className="rounded-[28px] lg:w-full lg:h-full sm:w-full sm:h-[72.2px]"
          alt="product-img"
          src={img}
          width={150}
          height={150}
        />
        <div
          className={`${cls} text-white lg:w-full sm:w-full sm:h-[20px] flex justify-center items-center live`}
        >
          <h2 className="text-[12px] sm:text-xs sm:leading-[10.91px] font-normal leading-[16.37px] text-nowrap">
            Live Auction
          </h2>
        </div>
      </div>
      <div className="lg:flex lg:w-[792px] sm:w-full lg:justify-between">
        <div className="main-content flex flex-col gap-2 lg:w-[670px] sm:w-full text-nowrap">
          <h2 className="text-lg sm:text-xs sm:landscape-[16px]">
            Six-piece clothing set (blouse - pants - hat and ...)
          </h2>
          <span className="text-[16px] lg:text-[24px] sm:text-xs sm:landscape-[16px]">
            starting price <strong>1000 EGP</strong>{" "}
          </span>
          <div className="flex sm:block justify-center items-center">
            <div className="text-[14px] lg:text-[18px] sm:text-xs sm:landscape-[16px] text-nowrap">
              <span>Lot starts in</span>
            </div>
            <div className="flex justify-center items-center gap-4 text-nowrap">
              <span className="lg:w-[105px] h-[40px] rounded-[24px] text-[14px] font-normal leading-[19.1px] p-[10px] sm:text-xs sm:w-[57px] sm:h-[28px] sm:p-[5px] days">
                2 <strong>Days</strong>{" "}
              </span>
              <span className="lg:w-[105px] h-[40px] rounded-[24px] text-[14px] font-normal leading-[19.1px] p-[10px] sm:text-xs sm:w-[57px] sm:h-[28px] sm:p-[5px] days">
                10 <strong>Hours</strong>{" "}
              </span>
              <span className="lg:w-[105px] h-[40px] rounded-[24px] text-[14px] font-normal leading-[19.1px] p-[10px] sm:text-xs sm:w-[57px] sm:h-[28px] sm:p-[5px] days">
                50 <strong>Minutes</strong>{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="proo-img">
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
