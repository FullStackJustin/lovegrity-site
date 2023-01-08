import './App.css';
import HomeSec2 from './components/section2home';
import Section3Home from './components/section3home';

function App() {

  return (
    <div>
      <div className="z-0 relative bg-fixed  bg-bottom bg-[url('./assets/stetho.webp')] bg-no-repeat bg-cover h-[90vh] ">
        <div className="absolute z-0 h-[90vh] w-[100vw] bg-purple-900 bg-opacity-25 ">
          <div className=" text-white text-[2em] md:text-[3em] lg:text-[4em] text-center z-50 opacity-100 font-[bodoni-moda] " >
            <p className=" mt-[20vh] w-[75%] mx-auto ">LOVEGRITY SKILLED</p>
            <p className=" w-[65%] mx-auto ">CONCIERGE HOME</p>
            <p className=" w-[70%] mx-auto "> NURSING SERVICES</p>
          </div>
          <hr className="w-[60%] m-auto mt-[1.5vh] "></hr>
          <p className='w-[60%] text-center text-white text-[1em] mt-[5vh] mx-auto ' >"SERVICES WITH LOVE AND INTEGRITY"</p>
          <div className="w-[100%] flex justify-center">
            <button className="bg-white w-[8em] text-[1em] rounded-full mt-[10vh] lg:mt-[5vh] p-[10px] ">Learn More</button>
          </div>
        </div>
      </div>
      <HomeSec2 />
      <Section3Home/>
    </div>
  );
}

export default App;
