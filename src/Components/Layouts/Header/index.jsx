import React from "react";
import Logo from "../../../assets/Logo.png";
import Globe from "../../../assets/globe.svg";

const Header = () => {
  return (
    <div className="container mx-auto max-w-[1296px] py-[24px]">
      <div className="flex justify-between items-center">
        {/* Left */}
        <div>
          <div>
            <img className="w-[196.8px]" src={Logo} alt="Logo" />
          </div>
        </div>
        {/* Left */}
        {/* Right */}
        <div className="flex items-center ">
          <div className="flex gap-[28px] mr-[44px]">
            <div className="text-[#E6EEF9]">
              <h2 className="font-semibold text-[14px] hover:text-[#8A72D8] cursor-pointer leading-4">Supports</h2>
            </div>
            <div className="text-[#E6EEF9] gap-3 flex">
              <img src={Globe} alt="Globe" />
              <h2 className="font-semibold text-[14px] hover:text-[#8A72D8] cursor-pointer leading-4">Language</h2>
            </div>
            <div className="text-[#E6EEF9]">
              <h2 className="font-semibold text-[14px] hover:text-[#8A72D8] cursor-pointer leading-4">F.A.Q</h2>
            </div>
          </div>
          <div className="flex gap-3">
            {" "}
            <div>
              <button className="py-[6px] px-5 rounded-[36px] hover:bg-[#fdfbfb] bg-[#FFFFFF] border border-[#997FF0]">
                <h2 className="text-[#565656]">Log In</h2>
              </button>
            </div>
            <div>
              <button className="py-[6px] px-5 hover:bg-[#8A72D8]  rounded-[36px] bg-[#997FF0] ">
                <h2 className="text-[#FFFFFF]">Sign Up</h2>
              </button>
            </div>
          </div>
        </div>
        {/* Right */}
      </div>
    </div>
  );
};

export default Header;
