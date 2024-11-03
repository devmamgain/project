import { useEffect } from "react"
import AiTextAndVoice from "./AiTextAndVoice"
import ComparisonComponent from "./ComparisonComponent"
import ContactForm from "./ContactForm"
import DiscoveryCall from "./DiscoveryCall"
import FAQ from "./FAQ"
import HomePage from "./HomePage"
import NavBar from "./NavBar"
import OurServices from "./OurServices"
import Testimonials from "./Testimonials"

const FinalPage =()=>{
    useEffect(() => {
        const hash = window.location.hash;
        if (hash === "#contact-us") {
            const element = document.getElementById("contact-us");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);
    return(
        <div className="flex flex-col items-center">
<div className="relative flex justify-center w-full bg-[radial-gradient(#EAE7DC_0.5px,transparent_1px)] [background-size:30px_30px] bg-bgsecondary-color  before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-bgmain-color">
<HomePage/>
        </div>
        <div className="bg-bgmain-color flex justify-center w-full">
        <OurServices/>
        </div>
        <div className="bg-bgmain-color flex justify-center w-full">

        <ComparisonComponent/>
        </div>

        <div className="relative flex w-full justify-center bg-[radial-gradient(#EAE7DC_0.5px,transparent_1px)] [background-size:30px_30px] bg-bgmain-color  before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-bgsecondary-color">

        <AiTextAndVoice/>
        </div>
        <FAQ/>
        
        <Testimonials/>
        <div  id="contact-us" className="relative flex flex-col items-center w-full bg-[radial-gradient(#EAE7DC_0.5px,transparent_1px)] [background-size:30px_30px] bg-bgmain-color  before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-bgsecondary-color">

        <DiscoveryCall/>
       
        <ContactForm/>
        </div>
        <NavBar/>
        </div>
    )
}

export default FinalPage