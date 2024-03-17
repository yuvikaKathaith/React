import {useState} from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full bg-red-600 text-white shadow-lg">Red</button>
          <button 
          onClick={() => setColor("green")}className="outline-none px-4 py-1 rounded-full bg-green-600 text-white shadow-lg">Green</button>
          <button 
          onClick={() => setColor("blue")}className="outline-none px-4 py-1 rounded-full bg-blue-600 text-white shadow-lg">Blue</button>
          <button 
          onClick={() => setColor("yellow")}className="outline-none px-4 py-1 rounded-full bg-yellow-600 text-white shadow-lg">Yellow</button>
          <button 
          onClick={() => setColor("orange")}className="outline-none px-4 py-1 rounded-full bg-orange-700 text-white shadow-lg">Orange</button>
          <button 
          onClick={() => setColor("purple")}className="outline-none px-4 py-1 rounded-full bg-purple-600 text-white shadow-lg">Purple</button>
          <button 
          onClick={() => setColor("pink")}className="outline-none px-4 py-1 rounded-full bg-pink-500 text-white shadow-lg">Pink</button>
          <button 
          onClick={() => setColor("violet")}className="outline-none px-4 py-1 rounded-full bg-violet-900 text-white shadow-lg">Violet</button>
        </div>
      </div>
    </div>
  )
}

export default App