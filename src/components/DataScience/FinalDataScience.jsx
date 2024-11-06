import { useEffect } from "react"
import Pricing from "./Pricing"
import DataScienceHome from "./DataScienceHome"
import ContactForm from "../ContactForm"
import DiscoveryCall from "../DiscoveryCall"
import FAQ from "../FAQ"
import NavBar from "../NavBar"
import Testimonials from "../Testimonials"
import AboutDataScience from "./AboutDataScience"
import OurServices from "./OurServices"
import DataScienceFAQ from "./DataScienceFAQ"

const FinalDataScience =()=>{
    useEffect(() => {
        const hash = window.location.hash;
        if (hash === "#contact-us") {
            const element = document.getElementById("contact-us");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        if (hash === "#aboutservice") {
            const element = document.getElementById("aboutservice");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        if (hash === "#pricing") {
            const element = document.getElementById("pricing");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);
    return(
        <div className="flex flex-col items-center">
<div className="relative w-full flex justify-center bg-[radial-gradient(#EAE7DC_0.5px,transparent_1px)] [background-size:30px_30px] bg-bgsecondary-color  before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-bgmain-color">

        <DataScienceHome/>
        </div>
        <div className="bg-bgmain-color flex justify-center w-full">

        <AboutDataScience/>

        </div>
        <OurServices/>

        <div className="relative flex w-full justify-center bg-[radial-gradient(#EAE7DC_0.5px,transparent_1px)] [background-size:30px_30px] bg-bgmain-color  before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-bgsecondary-color">

        <Pricing/>
        </div>
        <DataScienceFAQ/>


        <Testimonials/>
        <div  id="contact-us" className="relative flex flex-col items-center w-full bg-[radial-gradient(#EAE7DC_0.5px,transparent_1px)] [background-size:30px_30px] bg-bgmain-color  before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-bgsecondary-color">

        <DiscoveryCall/>
        <ContactForm/>
        </div>
        <NavBar/>
        </div>
    )
}

export default FinalDataScience