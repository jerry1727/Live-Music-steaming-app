// import React, { useContext } from "react";
// import { assets, songsData } from "../assets/assets";
// import { PlayerContext } from "../context/PlayerContext";

// const player = () => {
//   const { seekBar, seekBg, playstatus, play, pause } =
//     useContext(PlayerContext);

//   return (
//     <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
//       <div className="hidden lg:flex items-center gap-4">
//         <img className="w-12" src={songsData[0].image} alt="" />
//         <div>
//           <p>{songsData[0].name}</p>
//           <p>{songsData[0].desc.slice(0, 12)}</p>
//         </div>
//       </div>
//       <div className="flex flex-col items-center gap-1 m-auto">
//         <div className="flex gap-4">
//           <img
//             className="w-4 cursor-pointer"
//             src={assets.shuffle_icon}
//             alt=""
//           />
//           <img className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />
//           {playstatus ? (
//             <img
//               onClick={pause}
//               className="w-4 cursor-pointer"
//               src={assets.pause_icon}
//               alt=""
//             />
//           ) : (
//             <img
//               onClick={play}
//               className="w-4 cursor-pointer"
//               src={assets.play_icon}
//               alt=""
//             />
//           )}

//           <img className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
//           <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
//         </div>
//         <div className="flex items-center gap-5">
//           <p>1:06</p>
//           <div
//             ref={seekBg}
//             className="w-[60vw] max-w-[500px] bg-gray-300 rounded full cursor-pointer"
//           >
//             <hr
//               ref={seekBar}
//               className="h-1 border-none w-0 bg-green-800 rounded-full"
//             />
//           </div>
//           <p>3:20</p>
//         </div>
//       </div>
//       <div className="hidden lg:flex items-center gap-2 opacity-75">
//         <img className="w-4" src={assets.plays_icon} alt="" />
//         <img className="w-4" src={assets.mic_icon} alt="" />
//         <img className="w-4" src={assets.queue_icon} alt="" />
//         <img className="w-4" src={assets.speaker_icon} alt="" />
//         <img className="w-4" src={assets.volume_icon} alt="" />
//         <div className="w-20 bg-slate-50 h-1 rounded•"></div>
//         <img className="w-4" src={assets.mini_player_icon} alt="" />
//         <img className="w-4" src={assets.zoom_icon} alt="" />
//       </div>
//     </div>
//   );
// };

// export default player;

//################################################################################################

// import React from "react";
// import { songsData } from "../assets/assets";

// const Player = () => {
//   return (
//     <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
//       {/* Song Info (Left Side) */}
//       <div className="hidden lg:flex items-center gap-4">
//         <img
//           className="w-12 h-12 rounded"
//           src={songsData[0].image}
//           alt={songsData[0].name}
//         />
//         <div>
//           <p className="font-semibold">{songsData[0].name}</p>
//           <p className="text-sm text-gray-400">
//             {songsData[0].desc.slice(0, 12)}...
//           </p>
//         </div>
//       </div>

//       {/* Controls (Center) */}
//       <div className="flex items-center gap-6">
//         {/* You can later add play/pause/next buttons here */}
//         <p className="text-gray-400">Player Controls</p>
//       </div>

//       {/* Extra Options (Right Side) */}
//       <div className="hidden md:flex items-center gap-4">
//         {/* Volume, queue, etc. will go here */}
//         <p className="text-gray-400">Options</p>
//       </div>
//     </div>
//   );
// };

// export default Player;

// ############################################################################

import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const { track, seekBar, seekBg, playStatus, play, pause, time, previous, next, seekSong} =
    useContext(PlayerContext);

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt=""
          />
          <img onClick={previous} className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />
          {playStatus ? (
            <img
              onClick={pause}
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
              alt=""
            />
          ) : (
            <img
              onClick={play}
              className="w-4 cursor-pointer"
              src={assets.play_icon}
              alt=""
            />
          )}
          <img onClick={next} className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
        </div>
        <div className="flex items-center gap-5">
          <p>
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
          
            ref={seekBg}
            onClick={seekSong}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-green-800 rounded-full"
            />
          </div>
          <p>
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assets.plays_icon} alt="" />
        <img className="w-4" src={assets.mic_icon} alt="" />
        <img className="w-4" src={assets.queue_icon} alt="" />
        <img className="w-4" src={assets.speaker_icon} alt="" />
        <img className="w-4" src={assets.volume_icon} alt="" />
        <div className="w-20 bg-slate-50 h-1 rounded-full"></div>
        <img className="w-4" src={assets.mini_player_icon} alt="" />
        <img className="w-4" src={assets.zoom_icon} alt="" />
      </div>
    </div>
  );
};

export default Player;
