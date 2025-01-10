import React from 'react'
import Desktop from "../assets/desktop.svg"

export default function Home() {
    return (
        <>
            <main className='grid justify-center'>
                <div className='lg:container px-4'>
                    <div className='flex items-center md:flex-row flex-col'>
                        <div>
                            <h1 className='text-5xl tracking-widest font-semibold mb-5'>Web Developer</h1>
                            <p className='text-gray-800'>I like to make Websites,<br /> currently learning <strong>Web Development, Linux, Neovim </strong> </p>
                        </div>
                        <div>
                            <img src={Desktop} alt="" className='w-full md:my-0 my-10' />
                        </div>
                    </div>
                    <div className='mt-16 text-center grid justify-items-center'>
                        <h2 className='text-4xl tracking-widest font-semibold mb-5'>HI, I am Realizer. Nice to meet you</h2>
                        <p className='text-gray-800 md:w-1/2'>As a passionate web development learner, I embrace the challenges and creativity that come with building dynamic websites. My curiosity drives me to explore new technologies and coding languages, constantly expanding my skill set.</p>
                    </div>
                </div>
            </main>
        </>
    )
}

