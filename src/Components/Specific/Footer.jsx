import {  Logo } from "../../assets"

const Footer = () => {
  return (
    <section className="Footer custom-bg-footer relative py-[15rem]  flex justify-around items-center gap-8">
                <img src={Logo} alt="logo" />
                <div className="links">
                    <li className=" list-none flex justify-center items-center gap-4 flex-wrap text-xl font-semibold">
                        <a href="/home">Home</a>
                        <a href="/home">ABout</a>
                        <a href="/home">Service</a>
                        <a href="/home">Pricing</a>
                        <a href="/home">Contct</a>
                    </li>
                </div>
        </section>
  )
}

export default Footer
