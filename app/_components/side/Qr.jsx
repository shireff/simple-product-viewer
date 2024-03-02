import React from "react";
import Image from "next/image";
import ".//qr.css";
function Qr() {
  return (
    <div className="desc-side flex flex-col justify-center items-center lg:w-[407px] sm:w-[343px] h-[475px] rounded-[21px]">
      <div className="main flex flex-col gap-[16px]">
        <div className="flex flex-row justify-between">
          <div>
            <h2 className="text-[24px] font-bold leading-[23px]">QR Code</h2>
          </div>
          <div className="qr-icons">
            <div className="flex flex-row gap-[24px]">
              <Image
                // className="rounded-[24px] w-[100px] h-[100px]"
                alt="qr-img"
                src="/img/eye.svg"
                width={24}
                height={24}
              />
              <Image
                // className="rounded-[24px] w-[100px] h-[100px]"
                alt="qr-img"
                src="/img/share.svg"
                width={24}
                height={24}
              />
              <Image
                // className="rounded-[24px] w-[100px] h-[100px]"
                alt="qr-img"
                src="/img/document-download.svg"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        <div className="hint flex items-center justify-center h-[59px] rounded-[18px]">
          <div className="flex items-center justify-center h-[24px] gap-[8px]">
            <Image
              // className="rounded-[24px] w-[100px] h-[100px]"
              alt="qr-img"
              src="/img/document-download2.svg"
              width={24}
              height={24}
            />
            <h2 className="text-[12px] font-normal leading-[16.37px]">
              Download the QR code or share it with your friends.
            </h2>
          </div>
        </div>
        <div className="qr flex justify-center items-center h-[313px] rounded-[18px] px-[10px] py-[10px] text-center">
          <div className="w-[317px] h-[272px] rounded-[18px] px-[1px] py-[1px] bg-white">
            <ul className="flex flex-col justify-center gap-[4px] items-center">
              <li className="w-[152px] h-[48px]">
                <Image
                  // className="rounded-[24px] w-[100px] h-[100px]"
                  alt="qr-img"
                  src="/img/header.svg"
                  width={130}
                  height={100}
                />
              </li>
              <li>
                <h2 className="text-[24px] font-bold leading-[32.74px]">Hala Ahmed</h2>
              </li>
              <li>
                <Image
                  // className="rounded-[24px] w-[100px] h-[100px]"
                  alt="qr-img"
                  src="/img/qr.svg"
                  width={135}
                  height={135}
                />
              </li>
              <li>
                <span className="text-[14px] font-normal leading-[19.1px]">Follow Us on Mazaady</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qr;
