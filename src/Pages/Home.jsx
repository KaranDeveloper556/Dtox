import Landing_sec from '../Components/Specific/Landing_sec'
import Feature from '../Components/Specific/Feature'
import Image_text from '../Components/Specific/Image_text'
import Service from '../Components/Specific/Service'
import Pricing from '../Components/Specific/Pricing'
import Newsletter from '../Components/Specific/Newsletter'

const Home = () => {
  return (
    <section className=' font-ubuntu'>
      <Landing_sec />
      <Feature />
      <Image_text />
      <Service />
      <Pricing />
      <Newsletter />
    </section>
  )
}

export default Home
