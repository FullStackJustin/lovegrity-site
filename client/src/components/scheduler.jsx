import scheduleImg from "../assets/scheduleImg.webp";


const Scheduler = (props) => {
    const { handleSetState} = props
    const setTrue = () => {
        handleSetState(true)
    }

  return (
    <div className="bg-[#8047BA] w-[90vw] lg:w-[85vw] mx-auto pb-[100px]"  id='scheduler'>
        <p className="text-white text-start text-[1.5em] pt-[5vh] tracking-wider font-[bodia-mona]">CONSULTATION: FREE</p>
        <hr className="w-full bg-white h-[1.5px]"></hr>
        <div className="w-full md:w-[60%] lg:w-[60%] flex flex-col md:justify-between lg:justify-between md:flex-row lg:flex-row mx-auto pt-[25px] ">
            <img src={scheduleImg} alt="Professional woman smiling into screen"
            className="w-full md:w-[15vw] lg:w-[15vw] "></img>
            <div className="flex flex-col text-white text-[1.25em] ">
                <p>Information Consult</p>
                <p>1 hr&nbsp;|&nbsp;Free</p>
                <p>Lets Talk.</p>
            </div>
            <button onClick={setTrue} className="rounded-full bg-white h-[50px] w-[100px] my-auto hover:bg-zinc-300 " >BOOK</button>
        </div>
    </div>
  );
};
export default Scheduler;
