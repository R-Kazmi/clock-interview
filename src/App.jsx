
import "./App.css";
import image1 from "./assets/Ellipse 29.png";
import image2 from './assets/Ellipse 29 (1).png'
import handH from './assets/hand hour.png'
import handM from './assets/hand min.png'
import handS from './assets/hand sec.png'

function App() {
  return (
    <main className="flex justify-center items-center">
      <section className="w-[400px] h-[400px] bg-[#F3F3F3] flex justify-center items-center p-[27px] relative drop-shadow-2xl rounded-full">

      <img src={image1} alt="" className="w-[90%] h-[90%] absolute"/>
      <img src={image2} alt="" className="w-[90%] h-[90%] absolute"/>
      <img src={handH} alt="" className="absolute top-[20%] left-[45%]"/>
      <img src={handM} alt="" className="absolute top-[30%] left-[25%]"/>
      <img src={handS} alt="" className="absolute top-[48%] left-[45%]"/>
      </section>
    </main>
  );
}

export default App;
