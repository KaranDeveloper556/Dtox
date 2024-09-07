import About_Product from "../Components/Specific/About_Product"
import Vision from "../Components/Specific/Vision"

const About = () => {
  return (
    <section className="px-4 flex justify-center items-center flex-col gap-2">
      <div className="capitalize py-[5rem] flex justify-center items-center flex-col gap-[2rem] z-[997] max-w-[70rem]">
        <h1 className='landing-page-shapes-h1 text-[2.5rem] sm:text-[3.2rem] lg:text-[4.4rem] font-extrabold leading-[3rem] sm:leading-[4rem] lg:leading-[5rem] text-center'>About US</h1>
        <p className='text-[1.2rem] lg:text-[1.6rem] text-center text-gray-500'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ur.
          Excepteur sint occaecat cupidatat non proident</p>
        <p className='text-[1.1rem] lg:text-[1.4rem] text-left text-gray-700'>Readdle redefines personal productivity and shapes the "future of work" by crea outstanding apps and services. Popular Readdle apps such as Scanner Pro, PDF Expert, Spark and Documents, were downloaded over 90 million times worldwide. Readdle apps shaped mobile software categories, such as document scanning (Scanner Pro), email (Spark), document management (Documents), PDF editing (PDF Expert) and calendaring (Calendars 5). We've also won numerous awards, got to the top positions on the App Store charts and, most importantly, are loved by millions of people.</p>
      </div>
      <iframe
        className='h-[15rem] lg:h-[20rem] w-[20rem] lg:w-[65rem] rounded-lg'
        src="https://www.youtube.com/embed/4WiH9pf2ULQ?si=2TzjHgKzRDOgi528"
        width="100%"
        height='100%'
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
      </iframe>
      <About_Product />
      <Vision />
    </section>
  )
}

export default About
