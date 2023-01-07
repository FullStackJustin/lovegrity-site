import './App.css';
import HomeBanner from './components/homeBanner';

function App() {
  
  return (
    <>
    <div className="z-0 text-[3rem] relative bg-fixed  bg-bottom bg-[url('./assets/stethoscope.jpeg')] bg-no-repeat bg-cover h-[85vh] ">
    <div className="absolute z-0 h-[85vh] w-[100vw] bg-purple-900 bg-opacity-25 ">
    <div className=" text-white text-center z-50 opacity-100 " >
            <p className=" mt-[25vh] w-[60%] mx-auto ">LOVEGRITY SKILLED HOME</p>
            <p className=" w-[50%] mx-auto ">CONCIERGE NURSING</p>
            <p className=" w-[40%] mx-auto ">SERVICES</p>
        </div>
        <hr className="w-[60%] m-auto "></hr>
        <p className='w-[60%] text-center text-white text-[.5em] m-auto ' >"SERVICES WITH LOVE AND INTEGRITY"</p>
        <br />
        <div className="w-[100%] flex justify-center">
            <button className="bg-white w-auto text-[.5em] rounded-full p-[15px] ">Learn More</button>
        </div>
    </div>
    </div>
    </>
  );
}

export default App;
