import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Arrow from '../assets/arrow';

const DetailSewa = () => {
  return (
    <div className='relative flex flex-col'>
      <div className="w-screen h-[680px] bg-[#BBBBBB] relative flex items-center justify-center">
        <div className="w-[1340px] h-[600px] rounded-[12px] bg-[#F5F5F5] border-black border-[1px] flex items-center justify-center">
          <Image
            alt="lapangan-image"
            width={1340}
            height={600}
            src="/hero1.png"
          />
        </div>
      </div>

    <div className="test"></div>

      <div className="w-screen bg-[#141414] relative flex flex-col">

        <div className='w-screen h-[120px] flex flex-row justify-between px-[80px] items-center mb-[50px]'>
          <div className='text-[40px]'>
            <p>Tournament BINUS</p>
          </div>
          <div>
            <div className="arrow flex flex-row w-[116px] h-[42px] gap-[2px]">
              <div className='w-[58px] h-[42px] bg-[#F5F5F5] text-black rounded-l-[20px] flex items-center justify-center'>
                <div className="arrwLeft">
                  <Arrow />
                </div>
              </div>
              <div className='w-[58px] h-[42px] bg-[#F5F5F5] text-black rounded-r-[20px] flex items-center justify-center'>
                <div className="arrwLeft transform rotate-180">
                  <Arrow />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="detailTurnamen px-[80px] mb-[30px]">
            <div className='text-[24px] text-[#BEE702] underline'><p>Detail Tournament</p></div>
            <div className='text-[20px] text-[#F5F5F5]'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum earum excepturi beatae obcaecati atque accusamus corrupti ex deserunt corporis culpa!</p>
            </div>
          </div>
          <div className="location pl-[80px] mb-[30px]">
            <div className='text-[24px] text-[#BEE702] underline'><p>Detail Location</p></div>
            <div className='text-[20px] text-[#F5F5F5]'><p>Jakbar, Kemanggisan</p></div>
          </div>
          <div className="date pl-[80px] mb-[30px]">
            <div className='text-[24px] text-[#BEE702] underline'><p>Start-End Date Registration</p></div>
            <div className='text-[20px] text-[#F5F5F5]'><p>26 Jun - 12 Jul </p></div>
          </div>
          <div className="contact pl-[80px] mb-[30px]">
            <div className='text-[24px] text-[#BEE702] underline'><p>Contact Person</p></div>
            <div className='text-[20px] text-[#F5F5F5]'><p>Thomas : 08123456</p></div>
          </div>
          <div className="linkRegist pl-[80px] mb-[30px]">
            <div className='text-[24px] text-[#BEE702] underline'><p>Link Registration</p></div>
            <div className='text-[20px] text-[#F5F5F5] underline'><a>Https://lorem/Ipsum</a></div>
          </div>
        </div>

        <div className="h-[200px] flex items-center justify-center">
          <div className="bookBtn">
            <Link href="">
              <button className='w-[200px] h-[50px] bg-[#BEE702] text-[#141414] text-[14px] rounded-[12px]'>Book Now</button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DetailSewa;
