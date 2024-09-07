import React from 'react'

const Feature_Card = ({ heading = 'Awesome Design', text_content = 'Awesome Design Consectetur adipiscing elit donec tempus pellentesque dui.', icon = <TbPencilSearch /> }) => {
    return (
        <div className="feature_card px-2 flex justify-center items-center gap-6">
            <div className="feature_icon p-4 text-[2rem] text-white bg-blue-500 rounded-[5px] flex justify-center items-center">
                {icon}
            </div>
            <div className="feature-content max-w-[20rem]">
                <h3 className='text-[1.4rem] sm:text-[1.2rem] lg:text-[1.5rem] font-extrabold text-gray-800'>{heading}</h3>
                <p className='text-[1rem] lg:text-[1rem] text-gray-500 leading-5'>{text_content}</p>
            </div>
        </div>
    )
}

export default Feature_Card
