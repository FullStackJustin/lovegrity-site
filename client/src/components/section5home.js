import { useState } from "react";



const Section5Home = () => {
    const dt = new Date();
    const weekdays = [1, 2, 3, 4, 5]
    const available = "9:00am - 5:00pm";
    const notAvailable = "Closed";
    const [elmShowing, setElm2Showing] = useState(false);
    const elm1 = <p className=" mx-auto text-center mb-[5vh] ">Open today : {weekdays.includes(dt.getDay()) ? available : notAvailable} <i className="fa-solid fa-2xs fa-chevron-down"></i></p>
    const elm2 = <table className="mx-auto mb-[5vh] text-[#5E5E5E] ">
        <tbody>
        <tr>
            <td>Mon</td>
            <td>&nbsp;  &nbsp;09:00 am - 05:00 pm <i className="fa-solid fa-2xs fa-chevron-up"></i></td>
            
        </tr>
        <tr>
            <td>Tue</td>
            <td>09:00 am - 05:00 pm</td>
        </tr>
        <tr>
            <td>Wed</td>
            <td>09:00 am - 05:00 pm</td>
        </tr>
        <tr>
            <td>Thu</td>
            <td>09:00 am - 05:00 pm</td>
        </tr>
        <tr>
            <td>Fri</td>
            <td>09:00 am - 05:00 pm</td>
        </tr>
        <tr>
            <td>Sat</td>
            <td>Closed</td>
        </tr>
        <tr>
            <td>Sun</td>
            <td>Closed</td>
        </tr>
        </tbody>
    </table>

    const toggleElms = () => {
        if (elmShowing === false) {
            setElm2Showing(true)
        } else { setElm2Showing(false) }
    }

    return (
        <section className="h-auto w-[100vw] ">
            <div className="text-[1.25em] h-auto text-center flex flex-col justify-between ">
                <p className="wider ">Better yet, see us in person!</p>
                <br />
                <div className="text-[#5E5E5E]">
                    <p >We love our customers, so feel free to visit during normal business hours.</p>
                    <p>(By Appointments)</p>
                </div>
                <br />
                <p>Lovegrity -"you can't have integrity without LOVE"</p>
                <br />
                <p className="text-[#5E5E5E]">3606 N Rancho unit 144</p>
                <br />
                <p><a href="tel:7028296404">(702)-829-6404</a> - <a href="tel:8884269476">(888)-426-9476</a> - <a href="mailto:lovegrity@gmail.com">lovegrity@gmail.com</a></p>
                <br />
                <p>Administrator Hours:</p>
                <br />
                <button className="w-auto mx-auto " onClick={toggleElms}>{!elmShowing ? elm1 : elm2}</button>
            </div>
            <div className="relative w-full bg-black text-white h-[30vh] ">
                <header className="font-bold tracking-widest font-[bodoni-moda] text-[1.5em] pt-[1em] pl-[5%] ">Check Us Out on Facebook</header>
                <hr className="w-[90%] mx-auto bg-black lg:h-[.10em] h-[.15em] my-[2.5vh] "></hr>
                <a href="https://www.facebook.com/109441048298296" className="max-w-fit mx-auto mt-[2.5em] flex flex-row justify-center "><i className="fa-brands w-auto fa-3x fa-facebook"></i></a>
            </div>
        </section>
    )
}

export default Section5Home;