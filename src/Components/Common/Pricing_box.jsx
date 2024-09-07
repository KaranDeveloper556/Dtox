import { useState } from 'react'
import { BiDollar } from 'react-icons/bi'

const Pricing_box = ({ title = 'Basic', Price = '00', About = 'Far far away, behind the wordmountains, far from the countries Vokalia and', btn }) => {
    return (
        <div className={`Pricing_box bg-slate-300 px-10 py-14 rounded-md flex justify-center items-center flex-col max-w-[25rem] gap-6 bg-gradient-to-tl from-[#18FCD8] to-[#C1FD7B]`}>
            <h2 className=' text-5xl font-extrabold'>{title}</h2>
            <h1 className='text-6xl font-extrabold flex'><span className='text-[1.5rem] font-medium'><BiDollar /></span> {Price}</h1>
            <p className=' text-[1.2rem] text-center text-gray-600 font-medium'>{About}</p>
            {btn}
        </div>
    )
}

export default Pricing_box
