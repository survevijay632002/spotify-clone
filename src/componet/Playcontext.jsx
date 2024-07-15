// import React, { createContext, useRef, useState } from "react";
// import { songsData } from "../assets/assets";

// export const Playcontext = createContext();

// const PlayerContextProvider = (props) => {
//   // Capitalized component name
//   const audioRef = useRef();
//   const seekBg = useRef();
//   const seekBar = useRef();
//   const [track, setTrack] = useState(songsData[0]);
//   const [playStatus, setPlayStatus] = useState(false);
//   const [time, setTime] = useState({
//     CurrentTime: {
//       second: 0,
//       minute: 0,
//     },
//     totalTime: {
//       second: 0,
//       minute: 0,
//     },
//   });

//   const play = () => {
//     audioRef.current.play();
//     setPlayStatus(true);
//   };

//   const pause = () => {
//     audioRef.current.pause();
//     setPlayStatus(false);
//   };

//   const contextValue = {
//     audioRef,
//     seekBar,
//     seekBg,
//     track,
//     setTrack,
//     playStatus,
//     setPlayStatus,
//     time,
//     setTime,
//     pause,
//     play,
//   };

//   return (
//     <Playcontext.Provider value={contextValue}>
//       {" "}
//       {/* Correct usage */}
//       {props.children}
//     </Playcontext.Provider>
//   );
// };

// export default PlayerContextProvider; // Export correctly
