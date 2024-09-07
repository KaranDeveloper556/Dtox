import React from 'react'
import { Vision_img } from '../../assets'

const Vision = () => {
    return (
        <section className='vision_sec py-[3rem] flex justify-center items-center flex-col gap-8 z-[997]'>
            <div className="capitalize flex justify-center items-center flex-col gap-[2rem] z-[997] max-w-[70rem]">
                <h1 className='landing-page-shapes-h1 text-[2.5rem] sm:text-[3.2rem] lg:text-[4.4rem] font-extrabold leading-[3rem] sm:leading-[4rem] lg:leading-[5rem] text-center'>Our Vision</h1>
                <p className='text-[1.1rem] lg:text-[1.3rem] text-center text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate totam quod nihil, molestiae?</p>
            </div>
            <div className="text-img flex justify-center items-center flex-wrap gap-[4rem]">
                <img src={Vision_img} alt="img" className=" relative" />
                <div className="text_area relative flex justify-center items-center gap-[2rem] flex-col max-w-[45rem]">
                    <h1 className='text-[2rem] sm:text-[2.8rem] lg:text-[4rem] font-bold leading-[3rem] sm:leading-[4rem] lg:leading-[4.2rem]'>Far away, behind the word mountains,</h1>
                    <p className='text-[1.2rem] lg:text-[1.5rem]  text-gray-500'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>
            </div>
        </section>
    )
}

export default Vision
