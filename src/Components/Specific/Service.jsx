import { Service_bg, Service as ServiceImg} from "../../assets"

const Service = () => {
    return (
        <section className='Image_text  py-[4rem] md:py-[10rem] flex justify-center items-center flex-wrap gap-8 z-[997]'>
            <div className="bg-img absolute right-0">
                <img src={Service_bg} alt="bg" />
            </div>
            <div className="text_area flex justify-center items-center flex-col gap-8 max-w-[35rem]">
                <h1 className='relative text-[2rem] sm:text-[2.8rem] lg:text-[4rem] font-bold leading-[3rem] sm:leading-[4rem] lg:leading-[4.2rem]'>Powerful Layout From Top To Bottom</h1>
                <p className='relative text-[1.2rem] text-gray-500'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <p className=' relative left-[-4rem] text-[1.2rem] text-gray-500'>Responsive on any device</p>
                <p className=' relative text-[1.2rem] text-gray-500'>Very easy to customize</p>
                <p className=' relative left-[-4rem] text-[1.2rem] text-gray-500'>Effective support</p>
            </div>
            <img src={ServiceImg} alt="img" className=" relative" />
        </section>
    )
}

export default Service
