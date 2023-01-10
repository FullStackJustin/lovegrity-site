import "../styles/sec4.css"



const Section4Home = () => {
    return (
        <section className="h-[100vh] w-[100vw] my-[5vh] ">
            <div className="m-auto w-[90vw] lg:w-[85%]  ">
                <header className="float-left font-bold tracking-widest font-[bodoni-moda] text-[1.5em]  ">Got Questions? Drop us a line!</header>
                <hr className="w-full bg-black lg:h-[.10em] h-[.15em] mt-[1vh] "></hr>
            </div>
            <div className="mx-auto w-[85vw] lg:w-[60vw] ">
                <form id="dropLineForm" className="w ">
                <header className="text-center my-[5vh] tracking-wider text-[1.5em] ">Drop us a line!</header> 
                    <input type="text" className="firstInputs border border-solid border-gray my-[2vh] w-full h-[3em] " placeholder="Name"></input>
                    <input type="text" className="firstInputs border border-solid border-gray my-[2vh] w-full h-[3em] " placeholder="Email*"></input>
                    <input type="text" className="border border-solid border-gray mt-[2vh] mb-[5vh] w-full h-[10em] text-start " id="formMessage" placeholder="Message"></input>
                    <span className="w-[100%] flex justify-center mb-[5vh] ">
                        <button className="w-full md:w-[25%] lg:w-[25%] rounded-full bg-purple-700 text-white py-[2.5vh] ">Send</button>
                    </span>
                    <p className="text-center text-[#5E5E5E] ">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
                </form>
            </div>
        </section>
    )
}

export default Section4Home;