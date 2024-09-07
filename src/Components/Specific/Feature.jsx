import React from 'react'
import { TbPencilSearch } from 'react-icons/tb'
import { FaLaptopCode } from "react-icons/fa";
import { BiCustomize } from "react-icons/bi";
import { BsLayoutTextWindow } from "react-icons/bs";
import Feature_Card from '../Common/Feature_Card'

const Feature = () => {
    return (
        <section className="feature-sec flex justify-center items-center flex-col gap-[4rem]">
            <div className="heading capitalize flex justify-center items-center flex-col gap-2 z-[997]">
                <h1 className='landing-page-shapes-h1 text-[1.8rem] sm:text-[2.4rem] lg:text-[4.4rem] font-extrabold leading-[3rem] sm:leading-[4rem] lg:leading-[5rem] text-center'>Awesome Features</h1>
                <p className='text-[.8rem] lg:text-[1rem] text-center text-gray-500'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ur.
                    Excepteur sint occaecat cupidatat non proident</p>
            </div>
            <div className="cards flex justify-center items-center flex-wrap gap-[2.5rem] lg:gap-[5rem] max-w-[80rem]">
                    <Feature_Card icon={<TbPencilSearch />} />
                    <Feature_Card icon={<BiCustomize />} heading='Easy Customize' text_content='Consectetur adipiscing elit donec tempus pellentesque dui.'/>
                    <Feature_Card icon={<FaLaptopCode />} heading='Bug free Code' text_content='Consectetur adipiscing elit donec tempus pellentesque dui.' />
                    <Feature_Card icon={<BsLayoutTextWindow />} heading='Organized Layouts' text_content='Consectetur adipiscing elit donec tempus pellentesque dui.'/>
            </div>
        </section>
    )
}

export default Feature
