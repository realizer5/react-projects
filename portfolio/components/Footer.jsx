import React from 'react'
import { NavLink, Link } from "react-router-dom"

export default function Footer() {
    return (
        <>
            <footer className='p-4 border-y-2 py-6 lg:py-8 mt-8'>
                <div className='flex justify-center mx-auto md:flex-row flex-col space-y-10'>
                    <div className='flex-1 mx-4 grid place-items-center gap-6 max-w-2xl ms-auto'>
                        <img src="https://avatars.pfptown.com/559/cyberpunk-pfp-1666.png" alt=""
                            className='h-28 rounded-full' />
                        <p className='text-gray-700'>Thank you for visiting my portfolio! I’m a passionate web developer dedicated to building clean, user-friendly, and high-performing websites. With expertise in front-end and back-end technologies, I craft digital experiences that are both functional and visually appealing. Feel free to reach out if you have any questions or are interested in collaborating on a project.</p>
                    </div>
                    <div className='grid grid-cols-2 gap-8 sm:gap-6 flex-none ms-auto me-4'>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Navigation</h2>
                            <ul>
                                <li className='mb-4'>
                                    <NavLink to="/" className={({ isActive }) => `${isActive ? "text-orange-700"
                                        : "text-gray-500"} hover:underline`} >Home</NavLink>
                                </li>
                                <li className='mb-4'>
                                    <NavLink to="/about" className={({ isActive }) => `${isActive ? "text-orange-700"
                                        : "text-gray-500"} hover:underline`}>About</NavLink>
                                </li>
                                <li className='mb-4'>
                                    <NavLink to="/contact" className={({ isActive }) => `${isActive ? "text-orange-700"
                                        : "text-gray-500"} hover:underline`}>Contact</NavLink></li>
                                <li>
                                    <NavLink to="/github" className={({ isActive }) => `${isActive ? "text-orange-700"
                                        : "text-gray-500"} hover:underline`}>Github</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    )
}

