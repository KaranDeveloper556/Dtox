import { Marketing_banner } from "../../assets"
import { Seo_bg } from "../../assets"
import Navlink_btn from "../Common/Navlink_btn"

const Image_text = () => {
    return (
        <section className='Image_text py-[10rem] flex justify-center items-center flex-wrap gap-8 z-[997]'>
            <div className="bg-img absolute left-0">
                <img src={Seo_bg} alt="bg" />
            </div>
            <img src={Marketing_banner} alt="img" className=" relative" />
            <div className="text_area relative flex justify-center items-center flex-col max-w-[45rem] gap-8">
                <h1 className='text-[2rem] sm:text-[2.8rem] lg:text-[4rem] font-extrabold leading-[3rem] sm:leading-[4rem] lg:leading-[4.2rem]'>A Complete Range Of SEO Marketing Services!</h1>
                <p className='text-[1.1rem] lg:text-[1.2rem]  text-gray-500'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                    There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <Navlink_btn to="/about" text="About US"/>
            </div>
        </section>
    )
}

export default Image_text
