import React from 'react'

const Newsletter = () => {
    return (
        <section className="newsletter_sec py-[6rem] flex justify-center items-center flex-col gap-8">
            <div className="heading capitalize flex justify-center items-center flex-col gap-2 z-[997]">
                <h1 className='landing-page-shapes-h1 text-[1.8rem] sm:text-[2.4rem] lg:text-[4.4rem] font-extrabold leading-[3rem] sm:leading-[4rem] lg:leading-[5rem] text-center'>Subscribe to our newsletter</h1>
                <p className='text-[1rem] lg:text-[1.2rem] text-center text-gray-500'>Receive updates, news and deals</p>
            </div>
            <div className="search shadow-xl text-[1rem] md:text-[1.3rem]">
                <input type="email" placeholder='Enter Your Email' className='p-4 w-[12rem] md:w-[35rem] rounded-tl-md rounded-bl-md outline-none'/>
                <button className=' uppercase p-4 md:p-6 bg-[#8986FF] text-white font-semibold rounded-tr-md rounded-br-md h-[5rem] md:h-{7rem]'>Subscribe</button>
            </div>
        </section>
    )
}

export default Newsletter
