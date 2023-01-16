import React, { useState } from 'react';

const Calendar = (props) => {
    const {handleSetState} = props
    const closeCalendar = () => {
        handleSetState(false)
    }
    const [date, setDate] = useState(new Date());

    const handleNext = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    }

    const handlePrev = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    }

    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    return (
        <div className="bg-[#8047BA] w-[90vw] text-white lg:w-[85vw] mx-auto pb-[100px]">
            <button onClick={closeCalendar}>
                <i className="fa-solid fa-chevron-left py-[15px]"></i> Back
            </button>
            <br />
            <div className="w-full md:w-[75%] lg:w-[50%] mx-auto flex flex-col">
                <span className=" flex justify-between pb-[15px]">
                    <button onClick={handlePrev}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <span>{date.toLocaleString('default', { month: 'long' })}&nbsp;{date.getFullYear()}</span>
                    <button onClick={handleNext}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </span>
                <table className="w-full text-center table-fixed border-separate border-spacing-2">
                    <thead>
                        <tr>
                            <td>SUN</td>
                            <td>MON</td>
                            <td>TUE</td>
                            <td>WED</td>
                            <td>THUR</td>
                            <td>FRI</td>
                            <td>SAT</td>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: Math.ceil(daysInMonth / 7) }, (_, i) => (
                            <tr key={i}>
                                {Array.from({ length: 7 }, (_, j) => {
                                    const day = i * 7 + j + 1 - new Date(date.getFullYear(), date.getMonth(), 1).getDay();
                                    if (day > 0 && day <= daysInMonth) {
                                        return <td key={j} className={`  ${day === new Date().getDate() ? 'bg-white rounded-full text-black' : ''}`}><button>{day}</button></td>;
                                    }
                                    return <td key={j}></td>;
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="w-full bg-[#713EA5] min-h-[15vh] mt-[25px] text-white text-center ">
                    <p className=" brightness-100 z-10 mt-[5vh]">There are no available times on this day. Please choose a highlighted date to see available times.</p>
                </div>
            </div>
            <div>

            </div>

        </div>
    );
}

export default Calendar;
