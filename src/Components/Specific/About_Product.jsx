import React from 'react'
import { Product_1, Product_2, Product_3 } from '../../assets'
import Navlink_btn from '../Common/Navlink_btn'


const About_Product = () => {
    return (
        <section className="About_Product_Preview py-[4rem] flex justify-center items-center flex-col gap-[2rem]">
            <div className="heading capitalize py-[2rem] flex justify-center items-center flex-col gap-[2rem] z-[997] max-w-[70rem]">
                <h1 className='landing-page-shapes-h1 text-[2.5rem] sm:text-[3.2rem] lg:text-[4.4rem] font-extrabold leading-[3rem] sm:leading-[4rem] lg:leading-[5rem] text-center'>Our Products</h1>
                <p className='text-[1rem] lg:text-[1.4rem] text-center text-gray-500'>Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia.</p>
            </div>
            <div className="products flex justify-center items-center flex-wrap gap-[3rem]">
                <div className="group flex max-w-[25rem] flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                    <img src={Product_1} alt="img" />
                    <div className="mt-4 px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
                        </a>
                        <div className="mt-2 mb-5 flex items-center justify-between">
                            <p>
                                <span className="text-3xl font-bold text-slate-900">$449</span>
                                <span className="text-sm text-slate-900 line-through">$699</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="group flex max-w-[25rem] flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                    <img src={Product_2} alt="img" />
                    <div className="mt-4 px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
                        </a>
                        <div className="mt-2 mb-5 flex items-center justify-between">
                            <p>
                                <span className="text-3xl font-bold text-slate-900">$449</span>
                                <span className="text-sm text-slate-900 line-through">$699</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="group flex max-w-[25rem] flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                    <img src={Product_3} alt="img" />
                    <div className="mt-4 px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
                        </a>
                        <div className="mt-2 mb-5 flex items-center justify-between">
                            <p>
                                <span className="text-3xl font-bold text-slate-900">$449</span>
                                <span className="text-sm text-slate-900 line-through">$699</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Navlink_btn to='/products' text='View More Products'/>
        </section>
    )
}

export default About_Product
