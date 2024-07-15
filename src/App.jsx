import { useContext } from "react";
import Slidebar from "./componet/Slidebar";
import "./App.css";
import Player from "./componet/Player";
import Display from "./componet/Display";
//import { Playcontext } from "./componet/Playcontext";

function App() {
  //const { audioRef, track } = useContext(Playcontext);

  return (
    <div className="h-screen bg-black border-2 border-white">
      <div className="h-[90%] border-2 border-white flex">
        <Slidebar />
        <Display />
      </div>
      <div className="bg-neutral-800 py-5">
        <Player />
        {/* <audio ref={audioRef} src={track.file} preload="auto"></audio> */}
      </div>
    </div>
  );
}

export default App;
