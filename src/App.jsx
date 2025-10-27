// import React from "react";
// import Sidebar from "./components/Sidebar";
// import player from "./components/player";

// const App = () => {
//   return (
//     <div className="h-screen bg-black ">
//       <div className="h-[90%] flex">
//         <Sidebar />
//       </div>
//       <player />
//     </div>
//   );
// };

// export default App;

//##################################################################################################

// import React, { useContext } from "react";
// import Sidebar from "./components/Sidebar";
// import Player from "./components/player";
// import Display from "./components/Display";

// const App = () => {
//   const { audioRef } = useContext(playerContext);
//   return (
//     <div className="h-screen bg-black">
//       <div className="h-[90%] flex">
//         <Sidebar />
//         <Display />
//       </div>
//       <Player /> {/* ⬅ Capitalized usage */}
//       <audio ref={audioRef} preload="auto"></audio>
//     </div>
//   );
// };

// export default App;

// import React, { useContext } from "react";
// import Sidebar from "./components/Sidebar";
// import Player from "./components/Player";
// import Display from "./components/Display";
// import { PlayerContext } from "./context/PlayerContextProvider"; // Adjust path as needed

// const App = () => {
//   const { audioRef } = useContext(PlayerContext);
//   return (
//     <div className="h-screen bg-black">
//       <div className="h-[90%] flex">
//         <Sidebar />
//         <Display />
//       </div>
//       <Player />
//       <audio ref={audioRef} preload="auto"></audio>
//     </div>
//   );
// };

// export default App;

// filepath: c:\Users\sawan\OneDrive\Desktop\Live-Music\src\App.jsx

import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
