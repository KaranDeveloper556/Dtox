import React from 'react'
import { Hero_img } from '../../assets'
import Button from '../Common/Button'

const Landing_sec = () => {
    return (
        <section className="Landing_section relative py-[10rem] lg:py-48 flex justify-center items-center flex-col gap-10 custom-bg">
            <div className="Landing-content flex justify-center items-center flex-col gap-6">
                <div className="texts capitalize flex justify-center items-center flex-col gap-6 z-[997]">
                    <h1 className='landing-page-shapes-h1 font-museomoderno text-[2.8rem] sm:text-[3.4rem] lg:text-[5.4rem] font-extrabold leading-[3rem] sm:leading-[4rem] lg:leading-[5rem] text-center'>Take Control Of <br /> Your Project and Team</h1>
                    <p className='landing-page-shapes-p text-[.7rem] sm:text-[.9rem] lg:text-[1.3rem] font-ubuntu'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <Button herf='/' text='Explore Us'/>
            </div>
            <img src={Hero_img} alt="hero-img" />
        </section>
    )
}

export default Landing_sec
