import React from "react";

import fb from "../assets/fb.png";
import figma from "../assets/figma.png";
import vervel from "../assets/vercel.png";

const FeaturedJob = () => {
  return (
    <div className="mt-[126px]">
      <h1 className="font-semibold lg:text-[16px] text-[14px] leading-[24px]">
        Featured Job
      </h1>
      <div className="mt-[17px] flex lg:flex-row flex-col items-start justify-between gap-[30px]">
        <div className="p-[25px] w-full lg:flex-1 flex flex-col gap-[20px] text-white bg-[#001AFF] shadow-[0px_30px_60px_rgba(0,26,266,0.1)] rounded-[8px]">
          <div className="flex items-center justify-start gap-[13px]">
            <img src={figma} alt="" />
            <div>
              <h1 className="font-semibold text-[18px] leading-[27px]">
                Front-End Developer
              </h1>
              <span className="text-[14px] leading-[21px] text-white/80">
                Figma
              </span>
            </div>
          </div>
          <p className="text-[16px] leading-[30px] text-white/60">
            We are looking for an experienced front-end developer to join our
            team.
          </p>
          <div className="h-[1px] bg-white/[0.15]"></div>
          <div className="flex items-center justify-between">
            <span className="px-[15px] py-[5px] bg-white/[0.15] rounded-full font-semibold text-[12px] leading-[18px]">
              Rust
            </span>
            <span className="font-semibold text-[14px] leading-[26px]">
              $70,000 - $90,000
            </span>
          </div>
        </div>
        <div className="p-[25px] w-full lg:flex-1 flex flex-col gap-[20px] bg-white shadow-[0px_30px_60px_rgba(0,26,266,0.1)] rounded-[8px]">
          <div className="flex items-center justify-start gap-[13px]">
            <img src={fb} alt="" />
            <div>
              <h1 className="font-semibold text-[18px] leading-[27px]">
                Data Scientist
              </h1>
              <span className="text-[14px] leading-[21px] text-black/60">
                Facebook
              </span>
            </div>
          </div>
          <p className="text-[16px] leading-[30px] text-black/80">
            We are seeking a data scientist to join our team.
          </p>
          <div className="h-[1px] bg-black/[0.05]"></div>
          <div className="flex items-center justify-between">
            <span className="px-[15px] py-[5px] bg-black/[0.07] rounded-full font-semibold text-[12px] leading-[18px]">
              Python
            </span>
            <span className="font-semibold text-[14px] leading-[26px]">
              $100,000 - $130,000
            </span>
          </div>
        </div>
        <div className="p-[25px] w-full lg:flex-1 flex flex-col gap-[20px] bg-white  shadow-[0px_30px_60px_rgba(0,26,266,0.1)] rounded-[8px]">
          <div className="flex items-center justify-start gap-[13px]">
            <img src={vervel} alt="" />
            <div>
              <h1 className="font-semibold text-[18px] leading-[27px]">
                Technical Writer
              </h1>
              <span className="text-[14px] leading-[21px] text-black/60">
                Vercel
              </span>
            </div>
          </div>
          <p className="text-[16px] leading-[30px] text-black/60">
            We are seeking a technical writer to join our team.
          </p>
          <div className="h-[1px] bg-black/[0.05]"></div>
          <div className="flex items-center justify-between">
            <span className="px-[15px] py-[5px] bg-black/[0.05] rounded-full font-semibold text-[12px] leading-[18px]">
              Documentation
            </span>
            <span className="font-semibold text-[14px] leading-[26px]">
              $60,000 - $80,000
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJob;
