import nurses from "../assets/nurses.jpg"

const HomeSec2 = () => {
    return (

        <section className='h-[120vh] md:h-[110vh] lg:h-[100vh] w-[100vw] flex flex-col md:flex-col lg:flex-row '>
            <div className="w-screen md:w-screen lg:w-[50vw] h-auto  lg:absolute lg:right-0 lg:top-[90vh] ">
                <img src={nurses} alt="Lovegrity Nurses" className="object-cover object-middle h-[45vh] md:h-[45vh] lg:h-[95vh] w-screen md:w-full lg:w-[50vw]  "></img>
            </div>
            <div className="h-[65vh] w-[100vw] md:w-[100vw] lg:w-[50vw] ">
                <div className="h-[50%] text-center mx-auto mt-[5vh] w-[90vw] md:w-[90vw] lg:w-[55%] break-words " >
                    <header>QUALITY SKILLED CONCIERGE NURSING SERVICES WITH HEART</header>
                    <br/>
                    <h4>NEED A NURSE (RN)?</h4>
                    <h4>Our Skilled Registered Nurses Bring A Peace Of Mind. We Are Committed To Quality Service. GIVE US A CALL!</h4>
                    <br/>
                    <button className="p-[5px] w-[10em] rounded-full text-purple-800 border-2 border-purple-800">Learn More</button>
                </div>
                <br/>
                <div className="mx-auto h-[50%] text-center lg:mt-[5vh] w-[90vw] md:w-[90vw] lg:w-[55%] " >
                    <header>NEED A NURSE (RN)? NEED HELP RECOVERING? LET US HELP?</header>
                    <br/>
                    <h4> Lovegrity skilled concierge nursing service provides personalized nursing care to clients in their home by knowledgeable licensed Registered Nurses at competitive rates. CHECK US OUT!</h4>
                    <br/>
                    <button className="p-[5px] w-[15em] rounded-full text-purple-800 border-2 border-purple-800">Schedule a free consultation</button>
                </div>
            </div>
        </section>
    )
}
export default HomeSec2;