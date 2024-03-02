import React from "react";
import Image from "next/image";
import ".//pro.css";
function Products(props) {
  const { cls, img, subImg } = props;
  return (
    <div className="flex gap-[10px] flex-row w-[768px] h-[127px]">
      <div className="pro-img w-[145px] h-[127px]">
        <Image
          className="rounded-[28px]"
          alt="product-img"
          src={img}
          width={150}
          height={150}
        />
        <div
          className={`${cls} text-white w-[114px] flex justify-center items-center`}
        >
          <h2 className="text-[12px] font-normal leading-[16.37px]">
            Live auction
          </h2>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="main-content flex flex-col gap-[8px]">
          <h2>Six-piece clothing set (blouse - pants - hat and ...)</h2>
          <span className="text-[24px] font-normal landscape-[32.23px]">
            starting price <strong>1000 EGP</strong>{" "}
          </span>
          <div className="flex justify-center items-center">
            <div>
              <span>Lot starts in</span>
            </div>
            <div className="flex justify-center items-center gap-[16px]">
              <span className="w-[105px] h-[40px] rounded-[24px] text-[14px] font-normal leading-[19.1px] p-[10px] days">
                2 <strong>Days</strong>{" "}
              </span>
              <span className="w-[105px] h-[40px] rounded-[24px] text-[14px] font-normal leading-[19.1px] p-[10px] days">
                10 <strong>Hours</strong>{" "}
              </span>
              <span className="w-[105px] h-[40px] rounded-[24px] text-[14px] font-normal leading-[19.1px] p-[10px] days">
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
