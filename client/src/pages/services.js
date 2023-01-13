import "../styles/services.css";



const Services = () => {

    // const toggleDrop = () => {
    //     document.getElementById('dropdown').classList.toggle('show');
    // }

    return (
        <div className="w-screen ">
            <div className="h-[15vh] w-screen bg-[#8047BA] "></div>
            <div className="h-[15vh] w-screen bg-white ">

                {/* Drop down example */}
                {/* <div className="dropdown inline-block ">
                    <button onClick={toggleDrop} className="dropdownBtn w-[25vh] h-[15vh] bg-black  p-[2.5em] rounded-full ">
                        <div className="dropdownContent hidden absolute z-1 text-white " id='dropdown'>
                            <a href='#' className="block ">Opt1</a>
                            <a href='#' className="block ">Opt2</a>
                            <a href='#' className="block ">Opt3</a>
                            <a href='#' className="block ">Opt4</a>
                        </div>
                    </button>
                </div> */}
                {/* End of dropdown example */}

            </div>
        </div>
        )
}
export default Services;