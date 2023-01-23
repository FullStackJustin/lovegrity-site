import stetho from '../assets/stetho.webp';

const AboutPg = () => {
    return (
        <div className="w-screen">
            <span className="h-[15vh] w-screen bg-[#8047BA] absolute top-0 "></span>
            <div className=" w-screen bg-[#8047BA] pb-[5vh] ">
                <div className="mx-auto w-[90%] mt-[15vh] ">
                    <p className="text-white text-start text-[1.5em] pt-[5vh] tracking-wider ">About Us</p>
                    <hr className="w-full bg-white mt-[2.5vh] lg:h-[1px] h-[1px]"></hr>
                    <img src={stetho} alt="stethoscope" className="mx-auto w-full md:max-w-[60%] rounded-md shadow-inner lg:w-[53%] my-[5vh] "></img>
                    <div className="text-start lg:text-center text-white tracking-wide">
                        <p>&emsp;Lovegrity is a Home Healthcare company established in 2020. Lovegrity is owned and operated by a Registered Nurse with over 20 years of healthcare experience. This CEO understands how frightening home care can be on an individual and a family, but equally understands how comforting it can be for a patient and / or a family to know that they are receiving care from a skilled professional whose focus is on their care from the heart and not just for a paycheck.</p>
                        <br />
                        <p>&emsp;She has been active in health care for over twenty years working from the east coast to the west coast as a travel nurse and has worked her way from being a Certified Nurse Assistant, Registered Nurse (BSN), received her Masters’ in Nursing Administration and currently pursuing her Family Nurse Practitioner (FNP). She began her career as a nurse in Interventional Cardiology and worked in Progressive Care for ten years prior to traveling and working various nursing specialties.</p>
                        <br />
                        <p>&emsp;Home Healthcare became a passion for her when she relocated and recognized the lack of LOVE and INTERGRITY in healthcare she witnessed and would hear from many of her patients and family members while traveling house to house as a home health nurse and hospice nurse and witnessing the lack of opportunity for nurses that simply desired to provide quality care with integrity as she held various leadership positions. The goal of Lovegrity is to be a change agent in healthcare by providing a safe haven for nurses to express their talent and skills with love and integrity, ensuring that patients are receiving the absolute best care possible.</p>
                        <br />
                        <h4 className=" text-[1.5em]">LOVE + INTEGRITY = LOVEGRITY</h4>
                        <p>&emsp;We provide quality skilled services that include disease management, wound management, medication management, wellness checkups and concierge services. We help patients and families breathe a little easier knowing that they have someone on their side that truly CARE.</p>
                        <br />
                        <h4 className=' text-[1.5em]'>Value</h4>
                        <p>&emsp;Whoever walks in integrity walks securely</p>
                        <p>Proverbs 10:9</p>
                        <br />
                        <h4 className=' text-[1.5em]'>Mission Statement</h4>
                        <p>&emsp;Our mission is to walk firmly and securely in our calling as nurses. To influence the health industry to encourage healthcare to be in full compliance, increase quality of care and strive for innovation. Providing high quality skilled nursing services that you can trust. </p>
                        <br />
                        <h4 className=" text-[1.5em]">We make a vow to:</h4>
                        <div className="text-start">
                            <p>&emsp;1. Perform every task with excellence</p>
                            <p>&emsp;2. Operate a healthy business of caring for people, not wasting our resources or our patients valuable time.</p>
                            <p>&emsp;3. Employ individuals that value compassion, love and integrity.</p>
                            <p>&emsp;4. Perform our work with integrity and transparency.</p>
                            <p>&emsp;5. Support, educate and grow to meet the demands of our patients daily Needs.</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="relative w-full bg-black text-white h-[30vh] ">
                <header className="font-bold tracking-widest font-[bodoni-moda] text-[1.5em] pt-[1em] pl-[5%] ">Check Us Out on Facebook</header>
                <hr className="w-[90%] mx-auto bg-black lg:h-[.10em] h-[.15em] my-[2.5vh] "></hr>
                <a href="https://www.facebook.com/109441048298296" className="max-w-fit mx-auto mt-[2.5em] flex flex-row justify-center "><i className="fa-brands w-auto fa-3x fa-facebook"></i></a>
            </div>
        </div>
    )
}

export default AboutPg;