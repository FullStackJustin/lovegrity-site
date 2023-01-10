import wellAndPrev from "../assets/wellAndPrev.webp"
import postOpServ from "../assets/postOpServ.webp"

const Section3Home = () => {
    return (
        <section className="h-auto w-[100vw] ">
            <div className="m-auto w-[90vw] lg:w-[85%] pt-[5vh] ">
                <header className="float-left font-bold tracking-widest font-[bodoni-moda] text-[1.5em]  ">OUR SERVICES</header>
                <hr className="w-full bg-black lg:h-[.10em] h-[.15em] mt-[10vh] "></hr>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row justify-between mx-auto w-[90vw] md:w-[90vw] lg:w-[85%] mt-[5vh] ">
                <div className="w-[100%] float-left md:w-[40vw] lg:w-[40vw] mb-[5vh] break-words ">
                    <img src={wellAndPrev} alt="Man Running in front of Sunset" className=" "></img>
                    <header className="py-[4vh] text-[1.5em] ">WELLNESS AND PREVENTION</header>
                    <p className="text-[#5E5E5E]">Lovegrity offers personalized concierge nursing in your home that is focused on keeping you healthy and well. </p>
                    <button className="p-[5px] mt-[2.5vh] w-[10em] rounded-full text-purple-800 border-2 border-purple-800">Learn More</button>
                </div>
                <div className="w-[100%] float-right md:w-[40vw] lg:w-[40vw] mb-[5vh] break-words ">
                    <img src={postOpServ} alt="Man Running in front of Sunset" className=" "></img>
                    <header className="py-[4vh] text-[1.5em] ">POST OPERATIVE SERVICES</header>
                    <p className="text-[#5E5E5E]">Lovegrity is a affordable answer to your post-operative needs when loved ones are not available or you just need a little assistance to get back to normal. </p>
                    <button className="p-[5px] mt-[2.5vh] w-[10em] rounded-full text-purple-800 border-2 border-purple-800">Learn More</button>
                </div>
                
            </div>
        </section>
    )
}

export default Section3Home;