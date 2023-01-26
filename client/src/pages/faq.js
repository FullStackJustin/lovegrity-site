import { useRef } from "react";

const Faq = () => {

    const fact1Ref = useRef({});
    const toggleFact1 = () => {
        if (fact1Ref.current) {
            fact1Ref.current.classList.toggle('hidden');
        }
        const dropArrow1 = document.querySelector('#dropArrow1');
        dropArrow1.classList.toggle("rotate-180")
    }
    const fact2Ref = useRef({});
    const toggleFact2 = () => {
        if (fact2Ref.current) {
            fact2Ref.current.classList.toggle('hidden');
        }
        const dropArrow2 = document.querySelector('#dropArrow2');
        dropArrow2.classList.toggle("rotate-180")
    }
    return (
        <div className="h-auto w-screen mb-[25px]">
            <div className="h-[15vh] w-full bg-[#8047BA] "></div>
            <div className="bg-white w-full h-auto ">
                <div className="w-[95%] md:w-[95%] lg:w-[85%] mx-auto ">
                    <p className="text-black font-[bodia-mona] text-start text-[2em] pt-[5vh] tracking-wider ">Frequently Asked Questions</p>
                    <hr className="w-full bg-black my-[2.5vh] h-[1.5px]"></hr>
                    <p className="text-gray-500 ">Please reach us at <a href="mailto:lovegrity@gmail.com">lovegrity@gmail.com</a> if you cannot find an answer to your question.</p>
                    <br />
                    <div className="w-full md:w-[80%] lg:w-[65%] mt-[5vh] mx-auto font-[arial] ">
                        <div className="inlineBlock">
                            <button onClick={toggleFact1} className="w-full text-black tracking-widest my-[3vh] focus:text-[#8047BA] hover:text-[#8047BA] flex flex-row justify-between"><p className="text-[1.5em] font-arial text-start ">What makes Lovegrity different from other home car services?</p><i id="dropArrow1" className="transition-transform duration-400 fa-solid fa-chevron-down"></i></button>
                            <div ref={fact1Ref} className="hidden block text-gray-500">
                                <p>Lovegrity differs from other home care services in 3 distinct ways. </p>
                                <table className="w-full my-[2.5vh] ">
                                    <tbody className="w-full">
                                        <tr className="w-full">
                                            <td>&emsp;1.</td>
                                            <td>Prevention: Our goal is to ensure that you stay healthy from the beginning through our nurse driven packages that bring care to you, avoiding the need for unnecessary doctor visits and hospitalizations. WE OFFER WHAT YOU NEED THE WAY YOU WANT IT. </td>
                                        </tr>
                                        <tr className="w-full">
                                            <td>&emsp;2.</td>
                                            <td>Registered Nurses/Licensed Practical Nurses: Because we only employ registered nurses (RN) and (LPN) to see patients we are able to perform nursing skilled duties as they arise. WE SPECIALIZE IN YOU!</td>
                                        </tr>
                                        <tr className="w-full">
                                            <td>&emsp;3.</td>
                                            <td>RN accompanied doctor appointments: Whether you are a monthly, weekly or bi-weekly client, we are able to manage your care with any discipline as your advocate because we are able to talk t health care with your provider as your advocate, ensuring that you understand what you need to ensure you are receiving the best care possible all with LOVE and INTEGRITY AT ALL TIMES.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr />
                        <div className="inlineBlock">
                            <button onClick={toggleFact2} className="w-full text-black tracking-widest my-[3vh] focus:text-[#8047BA] hover:text-[#8047BA] flex flex-row justify-between" ><p className="text-[1.5em] font-arial text-start">What does Lovegrity mean?</p><i id="dropArrow2" className="transition-transform duration-400 fa-solid fa-chevron-down"></i></button>
                            <div ref={fact2Ref} className="block text-gray-500 hidden">
                                <p>Lovegrity is our moral standards for the care we provide.
                                    With Lovegrity, you are guaranteed health care encompassing  2 core values at all times:  LOVE and INTEGRITY</p>
                                <table className="w-full my-[2.5vh] ">
                                    <tbody className="w-full">
                                        <tr className="w-full">
                                            <td>&emsp;1.</td>
                                            <td>LOVE: We only employ nurses with strong moral values based in love for all people. You are never just a job, you are family and we understand our assignment concerning you.</td>
                                        </tr>
                                        <tr className="w-full">
                                            <td>&emsp;2.</td>
                                            <td>INTEGRITY: We stand by what we say and do. We understand that you may not be a healthcare specialist, that is why we specialize in that for you. Everything we do and say is 100% routed and grounded in integrity. We never want you to feel like you are alone, confused, or simply do not know how to stay safe and healthy. WE SERVE ! </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>LOVE + INTEGRITY = LOVEGRITY</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq;