import { ComputerIcon, Heart, HeartPulse, Soup, Sparkle } from 'lucide-react';
import React from 'react'

const UserCard = (props) => {
  return (
    <div className='flex flex-col rounded-md bg-[#ecf7d4] cursor-default overflow-hidden p-3 relative'>
          <a href="#" className='relative h-36'>
            <img src={(props.img)} alt="recipe image" className='rounded-md cursor-default w-full h-full object-cover' />

            <div className='absolute top-2 right-2 p-1 bg-white rounded-full cursor-pointer '>
            <Heart size={"20"} className='hover:fill-red-500 hover:text-red-500'/>

            </div>

          </a>
          
          <div className='flex items-center justify-between mt-1'>
            <p className='font-bold tracking-wide'>{props.title}</p>
            <span className=' bg-[#FF5733] text-lg text-white tracking-wide hover:bg-orange-700 font-semibold px-5 py-1 cursor-pointer rounded-md  mt-3'>Hire me</span>
          </div>
          <p className='my-2'>Experience: {props.exp}</p>

          <div className='flex gap-2 mt-auto'>
            <div className='flex gap-1 bg-[#d6f497] items-center p-2 cursor-default rounded-md'>
                <ComputerIcon size={"16"}/>
                <span className='text-sm tracking-tight font-semibold'>Revisions-free</span>
            </div>
            <div className='flex gap-1 bg-[#d6f497] items-center p-2 cursor-default rounded-md'>
                <Sparkle size={"16"}/>
                <span className='text-sm tracking-tight hover:fill-orange-950 font-semibold'>Supplied: {props.sup}</span>
            </div>
          </div>

        </div>
  )
}

export default UserCard;
