import './App.css';
import HomeBanner from './components/homeBanner';
import HomeSec2 from './components/section2home';

function App() {
  
  return (
    <div>
    <div className="z-0 text-[3rem] relative bg-fixed  bg-bottom bg-[url('./assets/stethoscope.jpeg')] bg-no-repeat bg-cover h-[85vh] ">
    <div className="absolute z-0 h-[85vh] w-[100vw] bg-purple-900 bg-opacity-25 ">
    <div className=" text-white text-center z-50 opacity-100 font-[bodoni-moda] " >
            <p className="text-[1.5em] h-[1.2em] mt-[20vh] w-[70%] mx-auto ">LOVEGRITY SKILLED</p>
            <p className="text-[1.5em] h-[1.2em] w-[65%] mx-auto ">CONCIERGE HOME</p>
            <p className="text-[1.5em] h-[1.2em] w-[55%] mx-auto "> NURSING SERVICES</p>
        </div>
        <hr className="w-[60%] m-auto "></hr>
        <p className='w-[60%] text-center text-white text-[.5em] mx-auto ' >"SERVICES WITH LOVE AND INTEGRITY"</p>
        <div className="w-[100%] flex justify-center">
            <button className="bg-white w-[8em] text-[.5em] rounded-full mt-[10px] p-[10px] ">Learn More</button>
        </div>
    </div>
    </div>
    <HomeSec2/>
    </div>
  );
}

export default App;
