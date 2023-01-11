const ContactPg = () => {
    return (
        <div className="h-auto flex flex-col">
            <span className="h-[15vh] w-screen bg-[#8047BA] "></span>
            <div className="w-[90vw] mx-auto h-auto flex flex-col ">
                <div className="my-[5vh] w-[90vw] mx-auto font-[bodoni-mona] text-[2em] tracking-wider ">
                    Contact Us
                    <hr className="w-full bg-black lg:h-[2.5px] h-[2.5px]"></hr>
                </div>
                <div className="flex flex-col md:flex-col lg:flex-row">
                    <div className="mx-auto w-[90vw] lg:w-[40vw] ">
                        <form id="dropLineForm" className="w ">
                            <header className="text-start tracking-wider text-[1.5em] ">Drop us a line!</header>
                            <input type="text" className="firstInputs border border-solid border-gray my-[2vh] w-full h-[3em] " placeholder="Name"></input>
                            <input type="text" className="firstInputs border border-solid border-gray my-[2vh] w-full h-[3em] " placeholder="Email*"></input>
                            <input type="text" className="border border-solid border-gray mt-[2vh] mb-[5vh] w-full h-[10em] text-start " id="formMessage" placeholder="Message"></input>
                            <span className="w-[100%] flex justify-center mb-[5vh] ">
                                <button className="w-full md:w-[25%] lg:w-[25%] rounded-full bg-[#8047BA] text-white py-[2.5vh] ">Send</button>
                            </span>
                            <p className="text-center text-[#5E5E5E] my-[2.5vh] ">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
                        </form>
                    </div>
                    <div className="mx-auto w-[90vw] lg:w-[40vw] flex flex-col lg:text-start text-center sm:mt-[2.5vh]  ">
                        <div>
                            <h4 className="text-[1.5em] tracking-wider ">Better yet, see us in person!</h4>
                            <br />
                            <p className='text-gray-600 text-[1.25em] tracking-wider '>We love our customers and always want to hear from you. </p>
                        </div>
                        <br />
                        <div>
                            <h4 className="text-[1.5em] tracking-wider ">Lovegrity Skilled Care Services LLC</h4>
                            <br />
                            <p className="text-[#8047BA] text-[1.25em] ">Tel. <a className="text-gray-700" href="tel:7028296404">702-829-6404</a></p>
                            <p className="text-[#8047BA] text-[1.25em] ">Fax: <a className="text-gray-700" href="tel:7025226391">702-522-6391</a></p>
                            <p className="text-[#8047BA] text-[1.25em] ">Toll Free: <a className="text-gray-700" href="tel:8884269476">888-426-9476</a></p>
                            <p className="text-[#8047BA] text-[1.25em] ">Email: <a className="text-gray-700" href="mailto:Lovegrity@gmail.com">Lovegrity@gmail.com</a></p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="relative  bg-black text-white h-[30vh] ">
                <header className="font-bold tracking-widest font-[bodoni-moda] text-[1.5em] pt-[1em] pl-[5%] ">Check Us Out on Facebook</header>
                <hr className="w-[90%] mx-auto bg-black lg:h-[.10em] h-[.15em] my-[2.5vh] "></hr>
                <a href="https://www.facebook.com/109441048298296" className="w-[100vw] mt-[2.5em] flex flex-row justify-center "><i className="fa-brands fa-3x fa-facebook"></i></a>
            </div>
        </div>
    )
}

export default ContactPg;