import React from 'react'

export default function Form() {
  return (
    <div className='px-2 m-2 '>
      <h1 className='text-3xl'>Let’s define your <span className='bg-gradient-to-r from-[#FFE74E] to-[#FFA81C] text-transparent bg-clip-text'>targets</span></h1>
      <p className='text-[#6F6F6F]'>Focus on the most relevant fields to shape your ICP — all fields are optional</p>

      <div className=" overflow-y-scroll h-[70vh] overflow-x-hidden mt-2 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100">
        {/* --------------- Company Profile ---- */}
        <div className="">
          <h1 className='text-2sm mt-5 text-[#0c0c0c]'>Company Profile</h1>
          <form className='border mt-2 p-2 border-[#E7E7ED] rounded space-y-6'>
            {/* Company Headcound  */}
            <div className="flex-col flex gap-5">
              <label htmlFor="" className='text-sm'>Company Headcount</label>
              <select className='p-1 border text-xs rounded border-[#E7E7ED]  text-[#7d7d7d]' name="" id="">
                <option value="">1-10..</option>
                <option value="">Company-1</option>
                <option value="">Company-2</option>
              </select>
            </div>

            {/* Company HQ Locations  */}
            <div className="flex-col flex gap-5">
              <label htmlFor="" className='text-sm'>Company HQ Locations </label>
              <select className='p-1 border text-xs rounded border-[#E7E7ED]  text-[#7d7d7d]' name="" id="">
                <option value="">India..</option>
                <option value="">Company-1</option>
                <option value="">Company-2</option>
              </select>
            </div>

            {/*Revenue range  */}
            <div className="flex-col flex gap-5">
              <label htmlFor="" className='text-sm'>Revenue range</label>
              <select className=' p-1 border text-xs rounded border-[#E7E7ED]  text-[#7d7d7d]' name="" id="">
                <option value="">50l-1Cr..</option>
                <option value="">Company-1</option>
                <option value="">Company-2</option>
              </select>
            </div>

          </form>
        </div>
        <div className="">
          <h1 className='text-2sm mt-5 text-[#0c0c0c]'>Company Profile</h1>
          <form className='border mt-2 p-2 border-[#E7E7ED] rounded space-y-6'>
            {/* Company Headcound  */}
            <div className="flex-col flex gap-5">
              <label htmlFor="" className='text-sm'>Company Headcount</label>
              <select className='p-1 border text-xs rounded border-[#E7E7ED]  text-[#7d7d7d]' name="" id="">
                <option value="">1-10..</option>
                <option value="">Company-1</option>
                <option value="">Company-2</option>
              </select>
            </div>

            {/* Company HQ Locations  */}
            <div className="flex-col flex gap-5">
              <label htmlFor="" className='text-sm'>Company HQ Locations </label>
              <select className='p-1 border text-xs rounded border-[#E7E7ED]  text-[#7d7d7d]' name="" id="">
                <option value="">India..</option>
                <option value="">Company-1</option>
                <option value="">Company-2</option>
              </select>
            </div>

            {/*Revenue range  */}
            <div className="flex-col flex gap-5">
              <label htmlFor="" className='text-sm'>Revenue range</label>
              <select className=' p-1 border text-xs rounded border-[#E7E7ED]  text-[#7d7d7d]' name="" id="">
                <option value="">50l-1Cr..</option>
                <option value="">Company-1</option>
                <option value="">Company-2</option>
              </select>
            </div>

          </form>
        </div>

      </div>



    </div>
  )
}
