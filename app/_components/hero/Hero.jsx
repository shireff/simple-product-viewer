import React from "react";
import Image from "next/image";
import ".//hero.css"
import Products from "../products/Products";
function Hero() {
  return (
    <div className="desc-side flex flex-col p-[16px] lg:w-[780px] sm:w-[343px] h-[931px] rounded-[21px]">
      <div className="flex items-center justify-between sm:w-[311px]">
        <div className="flex gap-[10px] text-center text-[14px] font-bold leading-[19.1px]">
          <button className="btn1 w-[108px] sm:w-[97px] h-[35px] font-bold rounded-[14px] p-[8px]">Products</button>
          <button className="btn2 w-[108px] sm:w-[97px] h-[35px] font-normal rounded-[14px] p-[8px]">Articles</button>
          <button className="btn2 w-[108px] sm:w-[97px] h-[35px] font-normal rounded-[14px] p-[8px]">Reviews</button>
        </div>
        <button
          className="flex items-center gap-[4px] rounded-[10px] w-[125px] h-[40px] px-5 py-2.5 text-sm font-medium text-white sm:hidden btn"
          href="#"
        >
          <Image
            className="rounded-full icon-img"
            src={"/img/add-circle.svg"}
            width={18}
            height={18}
            alt="search-icon"
          />
          Add Review
        </button>
      </div>
      <div className="flex items-center gap-[8px]">
        <h2 className="text-[32px] sm:text-[24px] font-extrabold leading-[43.56px]">
          Products
        </h2>
        <span className="text-[14px] font-normal leading-[19.1px] span">(12)</span>
      </div>
      <div className="flex flex-col gap-[24px]">
        <Products cls="sub-product-img" img="/img/product1.svg" subImg="/img/hh.svg"/>
        <Products cls="sub-product-img" img="/img/sub-product-img2.svg" subImg="/img/hh.svg"/>
        <Products cls="sub-product-img1" img="/img/sub-product-img3.svg" subImg="/img/hh.svg"/>
        <Products cls="sub-product-img" img="/img/sub-product-img4.svg" subImg="/img/hh.svg"/>
        <Products cls="sub-product-img" img="/img/sub-product-img5.svg" subImg="/img/hh.svg"/>
      </div>
    </div>
  );
}

export default Hero;
