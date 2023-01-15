import calendar from "../assets/calendar.webp";
import smilingElders from "../assets/smilingElders.webp";
import blurredCafe from "../assets/blurredCafe.webp";
import candleAndFlowers from "../assets/candleAndFlowers.webp";
import holdingCream from "../assets/holdingCream.webp";
import roomSet from "../assets/roomSet.webp";
import "../styles/packages.css";


const PackagesPg = () => {
    return (
        <div className='w-screen flex flex-col'>
            <span className="h-[15vh] w-full bg-[#8047BA] "></span>
            <div className="w-[90%] mx-auto flex flex-col ">
                <div className="my-[5vh] font-[bodoni-moda] text-[2em] ">
                    WELLNESS AND PREVENTION PACKAGES&nbsp;: SUBSCRIPTION PACKAGES
                    <hr className=" bg-black lg:h-[2.5px] h-[2.5px]"></hr>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between ">
                    <img src={calendar} alt="pen laying on a calendar" className="h-fit w-full md:w-[50%] lg:w-[50%] "></img>
                    <div className="w-full md:w-[45%] lg:w-[45%] ">
                        <header className="text-[1.5em] ">WEEKLY SUBSCRIPTION: Frequent Monitoring</header>
                        <br />
                        <p className="text-zinc-800 font-bold ">* The perfect solution for people needing frequent monitoring due to diagnosis of chronic diseases or are at risk of chronic diseases or conditions and want it in the comfort of their home***</p>
                        <br />
                        <p className="text-zinc-600 text-[1.15em] ">Includes:</p>
                        <p className="text-zinc-600 text-[1.15em] ">-Weekly (2) Hour concierge RN visit</p>
                        <p className="text-zinc-600 text-[1.15em] ">-Basic wellness check</p>
                        <p className="text-zinc-600 text-[1.15em] ">&ensp;•&ensp;Nursing Assessment</p>
                        <p className="text-zinc-600 text-[1.15em] ">&ensp;•&ensp;Medication Assistance and Review</p>
                        <p className="text-zinc-600 text-[1.15em] ">&ensp;•&ensp;Care Coordination with Physician</p>
                        <p className="text-zinc-600 text-[1.15em] ">&ensp;•&ensp;Education and Recommendations</p>
                        <p className="text-zinc-600 text-[1.15em] ">- (1) Initial nurse accompanied doctor office visit and monthly as needed</p>
                        <p className="text-zinc-600 text-[1.15em] ">- Disease specific prevention Education and Counseling Service</p>
                        <p className="text-zinc-600 text-[1.15em] ">- Medication ordering and pickups</p>
                        <p className="text-zinc-600 text-[1.15em] ">- Chronic disease monitoring or management</p>
                        <p className="text-zinc-600 text-[1.15em] ">*DISCOUNTED RATES ON ANY ADDITIONAL NURSING SERVICES *</p>
                        <button className="w-[45%] my-[2.5em] p-[5px] text-[1.15em] border-2 border-solid border-[#8047BA] rounded-full ">Get Started Today</button>
                    </div>
                </div>
                <div className="w-full flex flex-col ">
                    <div className="w-full flex flex-col lg:flex-row lg:justify-between ">
                        <img src={smilingElders} alt="smiling elders" className="h-fit w-full md:w-[45%] lg:w-[45%] lg:absolute lg:right-[5vw]lg:top-auto md:absolute md:right-[5vw] md:top-auto "></img>
                        <div className="w-full md:w-[45%] lg:w-[45%] ">
                            <header className="text-[1.5em] ">BI-WEEKLY SUBSCRIPTION: Occasional Monitoring</header>
                            <br />
                            <p className="text-zinc-600 text-[1.15em] ">Includes:</p>
                            <p className="text-zinc-600 text-[1.15em] ">- Bi-weekly (2) Hour concierge RN visit</p>
                            <p className="text-zinc-600 text-[1.15em] ">- Basic wellness check</p>
                            <p className="text-zinc-600 text-[1.15em] ">&ensp;•&ensp;Nursing Assessment</p>
                            <p className="text-zinc-600 text-[1.15em] ">&ensp;•&ensp;Medication Assistance and Review</p>
                            <p className="text-zinc-600 text-[1.15em] ">&ensp;•&ensp;Care Coordination with Physician</p>
                            <p className="text-zinc-600 text-[1.15em] ">&ensp;•&ensp;Education and Recommendations</p>
                            <p className="text-zinc-600 text-[1.15em] ">- (1) Initial nurse accompanied doctor office visit and every 2 months as needed</p>
                            <p className="text-zinc-600 text-[1.15em] ">- Medication ordering and pickups</p>
                            <p className="text-zinc-600 text-[1.15em] ">*DISCOUNTED RATES ON ANY ADDITIONAL NURSING SERVICES *</p>
                            <button className="w-[45%] my-[2.5em] p-[5px] text-[1.15em] border-2 border-solid border-[#8047BA] rounded-full ">Get Started Today</button>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row md:justify-between lg:flex-row lg:justify-between ">
                        <img src={blurredCafe} alt="blurry cafe" className="h-fit w-full md:w-[50%] lg:w-[50%] "></img>
                        <div className="w-full md:w-[45%] lg:w-[45%] ">
                            <header className="text-[1.5em] ">BI-WEEKLY SUBSCRIPTION: Occasional Monitoring</header>
                            <br />
                            <p className="text-zinc-600 text-[1.15em] ">Includes:</p>
                            <p className="text-zinc-600 text-[1.15em] ">- Bi-weekly (2) Hour concierge RN visit</p>
                            <p className="text-zinc-600 text-[1.15em] ">- Basic wellness check</p>
                            <p className="text-zinc-600 text-[1.15em] ">&ensp;•&ensp;Nursing Assessment</p>
                            <p className="text-zinc-600 text-[1.15em] ">&ensp;•&ensp;Medication Assistance and Review</p>
                            <p className="text-zinc-600 text-[1.15em] ">&ensp;•&ensp;Care Coordination with Physician</p>
                            <p className="text-zinc-600 text-[1.15em] ">&ensp;•&ensp;Education and Recommendations</p>
                            <p className="text-zinc-600 text-[1.15em] ">- (1) Initial nurse accompanied doctor office visit and every 2 months as needed</p>
                            <p className="text-zinc-600 text-[1.15em] ">- Medication ordering and pickups</p>
                            <p className="text-zinc-600 text-[1.15em] ">*DISCOUNTED RATES ON ANY ADDITIONAL NURSING SERVICES *</p>
                            <button className="w-[45%] my-[2.5em] p-[5px] text-[1.15em] border-2 border-solid border-[#8047BA] rounded-full ">Get Started Today</button>
                        </div>
                    </div>
                </div>
                <div className="my-[5vh] font-[bodoni-moda] text-[2em] ">
                    NOT REALLY INTERESTED IN A COMMITMENT? WE GOT YOU COVERED!
                    <hr className=" bg-black lg:h-[2.5px] h-[2.5px]"></hr>
                </div>
                <div className="w-full md:w-[60%] lg:w-[50%] mx-auto text-center text-zinc-600 ">
                    <header className="text-[1.75em] ">Discount Packages</header>
                    <br/>
                    <ul className="text-start text-[1.15em] text-zinc-600 ">
                        <li>&ensp;•&ensp;Purchase RN nurse visits up front.</li>
                        <li>&ensp;•&ensp;The more coverage you purchase, the more you save when you need them.</li>
                        <li>&ensp;•&ensp;Services good for one year at your convenience.</li>
                        <li>&ensp;•&ensp;(1) Initial nurse accompanied visit per package.</li>
                        <li>&ensp;•&ensp;5% discount on additional nursing visits.</li>
                        <li>&ensp;•&ensp;10% discount on additional nurse accompanied doctor visits.</li>
                        <li>&ensp;•&ensp;GIVE US A CALL AND BUILD YOUR PERFECT PACKAGE.</li>
                    </ul>
                    <button className="w-[45%] my-[2.5em] p-[5px] text-[1.15em] border-2 border-solid border-[#8047BA] rounded-full mx-auto ">Get Started Today</button>
                    
                    <header className="text-[1.75em] ">ALA CARTE SERVICES</header>
                    <br/>
                    <ol className="text-start text-[1.15em] text-zinc-600 ">
                        <li>&ensp;1.&ensp;<strong>TRANSPORTATION</strong>: RN nurse accompanied transportation to and from doctor visits as your advocate. </li>
                        <li>&ensp;2.&ensp;<strong>Wound care</strong>: Dressing changes, wound management, wound checks all performed by a wound certified RN nurse.</li>
                        <li>&ensp;3.&ensp;<strong>Medication set up and education.</strong></li>
                        <li>&ensp;4.&ensp;<strong>Appointment scheduling and monitoring.</strong></li>
                        <li>&ensp;5.&ensp;<strong>Complete RN nurse wellness check.</strong></li>
                    </ol>
                    <ul className="text-center text-[1.15em] text-zinc-600 ">
                        <li>- Nurse Assessment</li>
                        <li>- Medication Review</li>
                        <li>- Coordinate doctors appointments </li>
                        <li>- Professional specialized education and recommendations</li>
                    </ul>
                    <p><strong>AND MUCH MORE!</strong></p>
                    <p>SCHEDULE A FREE CONSULTATION AND FIND OUT HOW OUR SERVICES CAN HELP YOU AND YOUR LOVED ONES BE AT YOUR ABSOLUTE BEST. </p>
                        <button className="w-[45%] my-[2.5em] p-[5px] text-[1.15em] text-[#8047BA] border-2 border-solid border-[#8047BA] rounded-full mx-auto ">Free - Consultation</button>
                </div>
                <div className="my-[5vh] font-[bodoni-moda] text-[2em] ">
                    POST-OPERATIVE RECOVERY SERVICES
                    <hr className=" bg-black lg:h-[2.5px] h-[2.5px]"></hr>
                </div>
                <div className="w-[98%] mx-auto flex flex-wrap justify-between ">
                    <div className="w-full md:w-[45%] lg:w-[30%] text-center mx-[15px] ">
                        <img src={holdingCream} alt="hand hodling cream" className="w-full h-fit "></img>
                        <br/>
                        <header className="text-[1.5em] ">Feel Better Package: 3 hour concierge RN service.</header>
                        <br/>
                        <ul className="text-start text-[1.25em] text-zinc-600 ">
                            <li>&ensp;•&ensp;We meet you at your place of discharge.</li>
                            <li>&ensp;•&ensp;Assist you with the discharge process.</li>
                            <li>&ensp;•&ensp;Obtain all discharge instructions with you.</li>
                            <li>&ensp;•&ensp;Transport you home.</li>
                            <li>&ensp;•&ensp;Get you comfortable.</li>
                        </ul>
                        <button className="w-[45%] my-[2.5em] p-[5px] text-[1.15em] text-[#8047BA] border-2 border-solid border-[#8047BA] rounded-full mx-auto ">Give Us A Call</button>
                    </div>
                    <div className="w-full md:w-[45%] lg:w-[30%] text-center mx-[15px] ">
                        <img src={roomSet} alt="hand hodling cream" className="w-full h-fit "></img>
                        <br/>
                        <header className="text-[1.5em] ">Feel Better PLUS Package: 5-Hours of concierge RN service.</header>
                        <br/>
                        <ul className="text-start text-[1.25em] text-zinc-600 ">
                            <li>&ensp;•&ensp;We meet you at your place of discharge.</li>
                            <li>&ensp;•&ensp;Assist you with the discharge process.</li>
                            <li>&ensp;•&ensp;Obtain all discharge instructions with you.</li>
                            <li>&ensp;•&ensp;Transport you home.</li>
                            <li>&ensp;•&ensp;Get you comfortable.</li>
                        </ul>
                        <div className="font-extrabold text-zinc-600 text-[1.25em] ">
                            <p>+ Assist with personal hygiene as needed.</p>
                            <p>+ Medication Arrangement.</p>
                            <p>+ Schedule follow up appointments and complete medication reconciliations and fax to doctors.</p>
                            <p>+ Follow up reminder call for follow up appointments.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[45%] lg:w-[30%] text-center mx-auto ">
                        <img src={candleAndFlowers} alt="hand hodling cream" className="w-full h-fit "></img>
                        <br/>
                        <header className="text-[1.5em] ">THE GRAND PACKAGE: 6-WEEKS TO RECOUP</header>
                        <br/>
                        <ul className="text-start text-[1.25em] text-zinc-600 ">
                            <li>&ensp;•&ensp;Includes the "Feel Better PLUS" package.</li>
                            <li>&ensp;•&ensp;6 Weeks of weekly concierge RN visits.</li>
                            <li>&ensp;•&ensp;Transportation to follow up appointment.</li>
                        </ul>
                        <p className="text-[1.15em] font-extrabold text-zinc-600 ">*DISCOUNTED RATE FOR WELLNESS AND PREVENTION*</p>
                        <button className="w-[45%] my-[2.5em] p-[5px] text-[1.15em] text-[#8047BA] border-2 border-solid border-[#8047BA] rounded-full mx-auto ">Give Us A Call</button>
                    </div>
                </div>
            </div>
            <div className="h-auto bg-[#8047BA] text-center text-white">
                <header className="font-[bodia-mona] py-[25px] text-[2em]  text-center ">Subscribe</header>
                <p>Get an additional 5% off your first purchase when you sign up for our newsletter!</p>
                <form id="subForm" className="w-[90%] mx-auto flex flex-col md:flex-row lg:flex-row justify-center">
                    <input type="text" placeholder="Email" className="border border-white w-full md:w-[40%] lg:w-[50%] h-[3em] bg-[#8047BA] text-slate-50 "></input>&ensp;
                    <button className="rounded-full w-full md:w-[20%] lg:w-[15%] bg-white text-[#8047BA] ">Sign Up</button>
                </form>
            </div>
        </div>
    )
}


export default PackagesPg;