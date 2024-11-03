import { useEffect } from "react"
import AiChatbot from "./AiChatbot"
import AiText from "./AiText"
import AiTextAndVoice from "./AiTextAndVoice"
import AiVoiceAgent from "./AiVoiceAgent"
import ChatbotHomePage from "./ChatbotHomePage"
import ComparisonComponent from "./ComparisonComponent"
import ContactForm from "./ContactForm"
import DiscoveryCall from "./DiscoveryCall"
import FAQ from "./FAQ"
import HomePage from "./HomePage"
import InboundOutbound from "./InboundOutbound"
import NavBar from "./NavBar"
import OurServices from "./OurServices"
import VoiceAgentHomePage from "./VoiceAgentHomePage"
import Testimonials from "./Testimonials"

const FinalVoiceAgentPage =()=>{
    useEffect(() => {
        const hash = window.location.hash;
        if (hash === "#contact-us") {
            const element = document.getElementById("contact-us");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        if (hash === "#inoutbound") {
            const element = document.getElementById("inoutbound");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);
    return(
        <div className="flex flex-col items-center">
<div className="relative w-full bg-[radial-gradient(#EAE7DC_0.5px,transparent_1px)] [background-size:30px_30px] bg-bgsecondary-color  before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-bgmain-color">

        <VoiceAgentHomePage/>
        </div>
        <div className="bg-bgmain-color flex justify-center w-full">

        <InboundOutbound/>
        </div>
        <div className="relative flex w-full justify-center bg-[radial-gradient(#EAE7DC_0.5px,transparent_1px)] [background-size:30px_30px] bg-bgmain-color  before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-bgsecondary-color">

        <AiVoiceAgent/>
        </div>
        <Testimonials/>
        {/* <FAQ/> */}
        <div  id="contact-us" className="relative flex flex-col items-center w-full bg-[radial-gradient(#EAE7DC_0.5px,transparent_1px)] [background-size:30px_30px] bg-bgmain-color  before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-bgsecondary-color">

        <DiscoveryCall/>
        <ContactForm/>
        </div>
        <NavBar/>
        </div>
    )
}

export default FinalVoiceAgentPage