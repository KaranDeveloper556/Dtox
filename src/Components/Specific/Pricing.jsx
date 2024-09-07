import Button from '../Common/Button'
import Pricing_box from '../Common/Pricing_box'

const Pricing = () => {
    return (
        <section className="pricing_sec px-2 pt-[4rem] md:pt-[10rem] md:pb-[4rem] flex justify-center items-center flex-col gap-8 z-[997]">
            <div className="heading capitalize flex justify-center items-center flex-col gap-2 z-[997]">
                <h1 className='landing-page-shapes-h1 text-[1.8rem] sm:text-[2.4rem] lg:text-[4.4rem] font-extrabold leading-[3rem] sm:leading-[4rem] lg:leading-[5rem] text-center'>Our Pricing</h1>
                <p className='text-[1rem] lg:text-[1.2rem] text-center text-gray-500'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur. Excepteur sint occaecat.</p>
            </div>
            <div className="pricing_cards flex justify-center items-center flex-wrap gap-4">
                <Pricing_box title='Free' Price='00' btn={<Button text='Buy Now'/>} />
                <Pricing_box title='Standard' Price='75' btn={<Button text='Get Started'/>} bg_change={true}/>
                <Pricing_box title='Premium' Price='99' btn={<Button text='Buy Now'/>} />
            </div>
        </section>
    )
}

export default Pricing
