import React from 'react'
import { GoHome } from "react-icons/go";
import { IoRocketOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { RiGroupLine } from "react-icons/ri";
import { HiOutlineChartPie } from "react-icons/hi";
import { Link, NavLink } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";

const navLinks = [
    {
        name: "home",
        path: "/",
        icon: GoHome
    },
    {
        name: "about",
        path: "/about",
        icon: IoRocketOutline
    },
    {
        name: "task",
        path: "/task",
        icon: CgNotes
    },
    {
        name: "people",
        path: "/people",
        icon: RiGroupLine
    },
    {
        name: "chart",
        path: "/chart",
        icon: HiOutlineChartPie
    },
    {
        name: "chart",
        path: "/chart",
        icon: CiMail
    },
]

export default function Sidebar() {

    return (
        <aside className='h-screen  shadow-2xl w-[110px] text-center'>
            <ul className='my-10 text-center'>
                {/* for Logo  */}
                <li><img className='w-5 mx-auto' src="/Frame.png" alt="" /></li>
                <li className='mt-8 mb-12'><img className='w-8 mx-auto' src="/herologo.png" alt="" /></li>

                {/* for navigation  */}


                {
                    navLinks.map((items, i) => (
                        <li
                            key={i}
                            className="h-[35px] mt-5 flex items-center justify-center"
                        >
                            <NavLink
                                to={items.path}
                                className={({isActive}) => isActive ? `bg-[#FFF9F0] rounded-full` : "hover:bg-[#FFF9F0] rounded-full flex items-center transition-all"}
                            >
                                {({ isActive }) => (
                                    <items.icon
                                        className={`text-xl m-2 transition-all ${isActive
                                            ? "text-[#FFBD58]"
                                            : "text-[#807CA3] hover:text-[#FFBD58]"
                                            }`}
                                    />
                                )}
                            </NavLink>
                        </li>
                    ))
                }


                {/* for setting and logout */}
                <div className="mt-15">
                    <li className='h-[35px] mt-5 flex items-center justify-center '>
                        <Link href="" className='hover:bg-[#FFF9F0] rounded-full flex items-center transition-all '>
                            <IoSettingsOutline className='text-xl  text-[#807CA3] m-2 hover:text-[#FFBD58] transition-all  ' />
                        </Link>
                    </li>
                    <li className='h-[35px] mt-5 flex items-center justify-center '>
                        <Link href="" className='hover:bg-[#FFF9F0] rounded-full flex items-center transition-all '>
                            <LuLogOut className='text-xl  text-[#807CA3] m-2 hover:text-[#FFBD58] transition-all  ' />
                        </Link>
                    </li>
                </div>
            </ul>
        </aside>
    )
}
