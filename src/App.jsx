import Tag from "./components/Tag";
import Random from "./components/Random";


export default function App() {
  return (
    <div className="background w-full h-full flex flex-col items-center">
      <h1 className="bg-white rounded-lg w-11/12 text-center mt-[40px] font-bold text-3xl">RANDOM GIFS</h1>

      <div className="flex flex-col w-full items-center">
        <Random />
        <Tag />
      </div>
    </div>
  );
}



