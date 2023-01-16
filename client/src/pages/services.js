import "../styles/services.css";
import servBox1 from "../assets/servBox1.webp"
import servBox2 from "../assets/servBox2.webp"
import servBox3 from "../assets/servBox3.webp"
import surgCare from "../assets/surgCare.webp"
import surgCare2 from "../assets/surgCare2.webp"
import surgCare3 from "../assets/surgCare3.webp"
import surgCare4 from "../assets/surgCare4.webp"
import Scheduler from "../components/scheduler";
import { useState } from "react";
import Calendar from "../components/calendar";


const Services = () => {

  const [scheduleOpen, setScheduleOpen] = useState(false);
  const handleSetState = (newState) => {
    setScheduleOpen(newState);
  }


    // const toggleDrop = () => {
    //     document.getElementById('dropdown').classList.toggle('show');
    // }

    return (
        <div className="w-screen ">
            <div className="h-[15vh] w-screen bg-[#8047BA] "></div>
            <div className="w-[90vw] lg:w-[85vw] mx-auto text-center font-medium ">
                <p className="text-[#8047BA] text-start text-[2em] pt-[5vh] tracking-wider ">CONCIERGE NURSING CARE - RN Nursing Services</p>
                <hr className="w-full bg-black my-[2.5vh] h-[1.5px]"></hr>
                <div className="w-full md:w-[75vw] lg:w-[53vw] mx-auto font-bold ">
                    <header className="w-full text-[#8047BA] text-[2em] tracking-wider font-normal ">Lovegrity Concierge Nurses Offer More Than Just Home Health Care.</header>
                    <br />
                    <p className="py-[.5vh] w-full text-gray-600 text-[1.25em] tracking-wide ">Compassionate, professional, highly skilled concierge Registered Nurses.&nbsp;<i>WELLNESS AND PREVENTION SERVICES to POST-OPERATIVE CARE SERVICES.</i></p>
                    <p className="py-[.5vh] w-full text-gray-600 text-[1.25em] tracking-wide ">Services for whether you are doing well or have something going on. </p>
                    <p className="py-[.5vh] w-full text-gray-600 text-[1.25em] tracking-wide ">LOVEGRITY HAS YOU COVERED. </p>
                    <ul className="text-start text-[1.25em] tracking-wider text-gray-500 font-light ">
                        <li>•&nbsp;Peace of mind with a Registered Nurse as your caregiver.</li>
                        <li>•&nbsp;Customized Care Plan to meet your specific needs.</li>
                        <li>•&nbsp;Nurse accompanied transportation home from procedure.</li>
                        <li>•&nbsp;Medication administration, reminders, and education </li>
                        <li>•&nbsp; Coordinating with care facilities and staff</li>
                        <li>•&nbsp;AND SO MUCH MORE....</li>
                    </ul>
                    <button className="rounded-full border-[1.5px] border-[#8047BA] text-[1.25em] text-[#8047BA] p-[5px] w-[15em] mt-[2.5vh] ">Schedule a Consultation</button>
                </div>
            </div>
            <div className="w-[90vw] mx-auto ">
                <p className="text-[#8047BA] text-start text-[2em] pt-[5vh] tracking-wider ">WELLNESS AND PREVENTION SERVICES</p>
                <hr className="w-full bg-black my-[2.5vh] h-[1.5px]"></hr>
                <div className="w-full flex flex-wrap md:flex-wrap lg:flex-row md:justify-around lg:justify-between ">
                    <div className="w-full md:w-[45%] lg:w-[30%] flex flex-col my-[2.5vh] text-center ">
                        <img src={servBox1} alt="green apple and stehtoscope" className="mb-[2.5vh] w-full "></img>
                        <header className="text-[1.5em] tracking-wider my-[2.5vh] ">Customized Wellness Check</header>
                        <ul className="text-start text-[1.10em] pl-[5px] text-gray-600 ">
                            <li>•&nbsp;Wellness Checks In The Comfort Of Your Home At Your Convenience weekly, bi-weekly or monthly. </li>
                            <li>•&nbsp;Services Provided By Licensed Skilled Registered Nurses. </li>
                            <li>•&nbsp;Nursing Care Customized To Your Medical Requirements. </li>
                            <li>•&nbsp;Packages Reasonably Priced.</li>
                            <li>•&nbsp;AND MUCH MORE!!!</li>
                        </ul>
                        <button className="rounded-full w-[40%] p-[2.5px] my-[5%] mx-auto border-2 border-[#8047BA] text-[#8047BA] ">Learn More</button>
                    </div>
                    <div className="w-full md:w-[45%] lg:w-[30%] flex flex-col my-[2.5vh] text-center ">
                        <img src={servBox2} alt="green apple and stehtoscope" className="mb-[2.5vh] w-full "></img>
                        <header className="text-[1.5em] tracking-wider my-[2.5vh] ">Customized Wellness Check</header>
                        <ul className="text-start text-[1.10em] pl-[5px] text-gray-600 ">
                            <li>•&nbsp;Medication Training and Education</li>
                            <li>•&nbsp;Medication Reconciliation</li>
                            <li>•&nbsp;Medication Pill Box Replenishing and Managing </li>
                            <li>•&nbsp;Medication Refills and Pick-ups</li>
                            <li>•&nbsp;IV Management</li>
                            <li>•&nbsp;AND MUCH MORE!! </li>
                        </ul>
                        <button className="rounded-full w-[40%] p-[2.5px] my-[5%] mx-auto border-2 border-[#8047BA] text-[#8047BA] ">Learn More</button>
                    </div>
                    <div className="w-full md:w-[45%] lg:w-[30%] flex flex-col my-[2.5vh] text-center ">
                        <img src={servBox3} alt="green apple and stehtoscope" className="mb-[2.5vh] w-full "></img>
                        <header className="text-[1.5em] tracking-wider my-[2.5vh] ">Customized Wellness Check</header>
                        <ul className="text-start text-[1.10em] pl-[5px] text-gray-600 ">
                            <li>•&nbsp;Coordination of Care with Doctors and Specialists</li>
                            <li>•&nbsp;Schedule and Manage Appointments and Procedures</li>
                            <li>•&nbsp;Ensure That All Directions And Processes Of Your Physician is Clearly Understood and Followed.</li>
                            <li>•&nbsp;Case Management</li>
                            <li>•&nbsp;AND MUCH MORE!!!</li>
                        </ul>
                        <button className="rounded-full w-[40%] p-[2.5px] my-[5%] mx-auto border-2 border-[#8047BA] text-[#8047BA] ">Learn More</button>
                    </div>
                    
                </div>
            </div>
            <div className="w-[90vw] mx-auto ">
                <p className="text-[#8047BA] text-start text-[2em] pt-[5vh] tracking-wider ">POST-OPERATIVE CARE SERVICES</p>
                <hr className="w-full bg-black my-[2.5vh] h-[1.5px]"></hr>
                <div className="w-full mx-auto md:w-[75%] lg:w-[75%] flex flex-wrap md:justify-around lg:justify-around ">
                    <div className="w-full md:w-[45%] lg:w-[45%] flex flex-col my-[2.5vh] text-center ">
                        <img src={surgCare} alt="green apple and stehtoscope" className="mb-[2.5vh] w-full "></img>
                        <header className="text-[1.5em] tracking-wider my-[2.5vh] ">Exceptional after surgical/procedure care</header>
                        <button className="rounded-full w-[40%] p-[2.5px] my-[5%] mx-auto border-2 border-[#8047BA] text-[#8047BA] ">Packages</button>
                    </div>
                    <div className="w-full md:w-[45%] lg:w-[45%] flex flex-col my-[2.5vh] text-center ">
                        <img src={surgCare2} alt="green apple and stehtoscope" className="mb-[2.5vh] w-full "></img>
                        <header className="text-[1.5em] tracking-wider my-[2.5vh] ">Transportation</header>
                        <button className="rounded-full w-[40%] p-[2.5px] my-[5%] mx-auto border-2 border-[#8047BA] text-[#8047BA] ">Packages</button>
                    </div>
                    <div className="w-full md:w-[45%] lg:w-[45%] flex flex-col my-[2.5vh] text-center ">
                        <img src={surgCare3} alt="green apple and stehtoscope" className="mb-[2.5vh] w-full "></img>
                        <header className="text-[1.5em] tracking-wider my-[2.5vh] ">Medication Pick up and management</header>
                        <button className="rounded-full w-[40%] p-[2.5px] my-[5%] mx-auto border-2 border-[#8047BA] text-[#8047BA] ">Packages</button>
                    </div>
                    <div className="w-full md:w-[45%] lg:w-[45%] flex flex-col my-[2.5vh] text-center ">
                        <img src={surgCare4} alt="green apple and stehtoscope" className="mb-[2.5vh] w-full "></img>
                        <header className="text-[1.5em] tracking-wider my-[2.5vh] ">Patient Advocacy</header>
                        <button className="rounded-full w-[40%] p-[2.5px] my-[5%] mx-auto border-2 border-[#8047BA] text-[#8047BA] ">Packages</button>
                    </div>
                </div>
            </div>
            <div className="bg-[#8047BA] w-full ">
                {scheduleOpen?<Calendar scheduleOpen={scheduleOpen} handleSetState={handleSetState}/>:<Scheduler scheduleOpen={scheduleOpen} handleSetState={handleSetState}/>}
            </div>
        </div>
    )
}
export default Services;