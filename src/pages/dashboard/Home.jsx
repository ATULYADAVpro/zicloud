import React from 'react'
import { RiEdit2Line } from "react-icons/ri";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";
import { CiRedo } from "react-icons/ci";
import Form from '../../components/Form';

export default function Home() {
  return (
    <div className=' border rounded  border-[#E7E7ED]'>
      <div className="grid grid-cols-3 gap-5 p-2 w-full">
        {/* header Parts  */}
        <div className="flex  gap-5 h-8 text-xs w-full items-center">
          <button className='p-2 border rounded border-[#E7E7ED] '>
            <MdOutlineArrowBackIosNew className='text-[#807CA3]' />
          </button>
          <div className="p-2 w-[110px] items-center border rounded border-[#E7E7ED] flex  gap-5">
            <span>UntitledList</span>
            <button>
              <RiEdit2Line />
            </button>
          </div>
        </div>
        {/* progress bar  */}
        <div className="p-1  w-fit flex gap-1 text-[#606060] items-center">
          <div className="text-center">
            <hr className='w-[50px]  outline-none border-none rounded-xl text-2xl h-[6px]  bg-gradient-to-r from-[#FFE74E] to-[#FFA81C]' />
            <p className='mt-2 text-[10px]'>Who</p>
          </div>
          <div className="text-center">
            <hr className='w-[50px]  outline-none border-none rounded-xl text-2xl h-[6px] bg-[#E1E1E1]' />
            <p className='mt-2 text-[10px]'>What/Why</p>
          </div>
          <div className="text-center">
            <hr className='w-[50px]    outline-none border-none rounded-xl text-2xl h-[6px] bg-[#E1E1E1]' />
            <p className='mt-2 text-[10px]'>Where</p>
          </div>
          <div className="text-center">
            <hr className='w-[50px] outline-none border-none rounded-xl text-2xl h-[6px] bg-[#E1E1E1]' />
            <p className='mt-2 text-[10px]'>When</p>
          </div>
        </div>

        {/* btns  */}
        <div className="text-xs  flex justify-center items-center gap-5">
          <button>Save</button>
          <button className='bg-gradient-to-r from-[#FFE74E] to-[#FFA81C] p-2 rounded text-white font-bold'>Make Campaign</button>
        </div>
      </div>

      {/* Main contents  */}
      <div className="grid grid-cols-2 border-t-1 border-t-[#E7E7ED] border-x-0 border-b-0">
        {/* child devi 1 */}
        <div className="p-2 border border-r-1 border-r-[#E7E7ED] border-b-0 border-l-0 border-t-0">
          {/* Logo and Name  */}
          <div className="flex justify-center text-center items-center gap-2">
            <img width={'16px'} src="/Frame.png" alt="" />
            <h1 className='text-xl '>Osla chat</h1>
          </div>

          {/* message boxs */}
          <div className="m-5 h-[70vh] flex flex-col">
            {/* received*/}
            <div>
              <p className="text-[#52515C]">Hello I’m Oslo. Tell me what’s on your mind</p>
              <div className="py-1 flex gap-2">
                <button>
                  <MdContentCopy className="text-[#52515C]" />
                </button>
                <button>
                  <CiRedo className="text-[#52515C]" />
                </button>
              </div>
            </div>

            {/* sent message */}
            <div className="bg-[#F8F8F8] p-2 w-fit text-[#2F2357] rounded-xl self-end">
              <p>Create leads on Tech targets</p>
            </div>
          </div>



          {/* input box */}
          <div className=" border border-[#E3E3E3] flex rounded px-2 ">
            <button>
              <IoIosSearch className='text-[#BCB9DB]' />
            </button>
            <input className='w-full p-1 outline-none px-5 text-[#2F2357]' type="text" name="" id="" />
            <button>
              <FaMicrophone className='text-[#FFBD58]' />
            </button>
          </div>

        </div>
        {/* child devi 2 */}
        <div className="">
          <Form />
        </div>
      </div>

    </div>
  )
}
