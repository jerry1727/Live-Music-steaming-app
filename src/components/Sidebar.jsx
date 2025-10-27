// import React from "react";
// import { assets } from "../assets/assets";

// const Sidebar = () => {
//   return (
//     <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
//       <div className="bg-[#121212] h-[15%] rounded flex flex-col jutify-around">
//         <div className="flex items-center gap-3 pl-8 cursor-pointer">
//           <img src={assets.home_icon} alt="" />
//           <p className="font-bold">Home</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// ##################################################################################################

// import React from "react";
// import { assets } from "../assets/assets";

// const Sidebar = () => {
//   return (
//     <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
//       <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
//         <div className="flex items-center gap-3 pl-8 cursor-pointer">
//           <img className="w-6" src={assets.home_icon} alt="" />
//           <p className="font-bold">Home</p>
//         </div>
//         <div className="flex items-center gap-3 pl-8 cursor-pointer">
//           <img className="w-6" src={assets.search_icon} alt="" />
//           <p className="font-bold">Search</p>
//         </div>
//         <div className="bg-[#121212] h-[85%] rounded">
//           <div className="p-4 flex items-center justify-between">
//             <div className="w-8" src={assets.stack_icon} alt="" />
//             <p className="front-semibold">Your Library </p>

//             </div>

//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

//export default Sidebar;

// #######################################################################################

// import React from "react";
// import { assets } from "../assets/assets";

// const Sidebar = () => {
//   return (
//     <div className="w-[25%] h-full p-2 flex flex-col gap-2 text-white hidden lg:flex">
//       <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-start items-start">
//         <div className="flex items-center gap-3 pl-4 pt-4 cursor-pointer">
//           <img className='w-6'  src={assets.home_icon} alt="" className="w-6 h-6" />
//           <p className="font-bold">Home</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// #############################################################################################

// import React from "react";
// import { assets } from "../assets/assets";

// const Sidebar = () => {
//   return (
//     <div className="w-[25%] h-screen p-2 flex-col gap-2 text-white hidden lg:flex">
//       {/* Top section */}
//       <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
//         <div className="flex items-center gap-3 pl-8 cursor-pointer">
//           <img className="w-6" src={assets.home_icon} alt="Home" />
//           <p className="font-bold">Home</p>
//         </div>
//         <div className="flex items-center gap-3 pl-8 cursor-pointer">
//           <img className="w-6" src={assets.search_icon} alt="Search" />
//           <p className="font-bold">Search</p>
//         </div>
//       </div>

//       {/* Library Section */}
//       <div className="bg-[#121212] h-[85%] rounded">
//         <div className="p-4 flex items-center justify-between">
//           <div className="flex items-center gap-3 cursor-pointer">
//             <img className="w-6" src={assets.stack_icon} alt="Library" />
//             <p className="font-semibold">Your Library</p>
//           </div>
//           <div className="flex items-center gap-3">
//             <img className="w-5" src={assets.arrow_icon} alt="" />
//             <img className="w-5" src={assets.plus_icon} alt="" />
//           </div>
//           <div className="p-4 bg-[242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
//             <h1>Create Your First Playlist</h1>
//             <p className="font-light">it's easy we will help you</p>
//             <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4></button>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// import React from "react";
// import { assets } from "../assets/assets";

// const Sidebar = () => {
//   return (
//     <div className="w-[25%] h-screen p-2 flex-col gap-2 text-white hidden lg:flex">
//       {/* Top section */}
//       <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
//         <div className="flex items-center gap-3 pl-8 cursor-pointer">
//           <img className="w-6" src={assets.home_icon} alt="Home" />
//           <p className="font-bold">Home</p>
//         </div>
//         <div className="flex items-center gap-3 pl-8 cursor-pointer">
//           <img className="w-6" src={assets.search_icon} alt="Search" />
//           <p className="font-bold">Search</p>
//         </div>
//       </div>

      

//       {/* Library Section */}
//       <div className="bg-[#121212] h-[85%] rounded">
//         {/* Header */}
//         <div className="p-4 flex items-center justify-between">
//           <div className="flex items-center gap-3 cursor-pointer">
//             <img className="w-6" src={assets.stack_icon} alt="Library" />
//             <p className="font-semibold">Your Library</p>
//           </div>
//           <div className="flex items-center gap-3">
//             <img className="w-5" src={assets.arrow_icon} alt="Arrow" />
//             <img className="w-5" src={assets.plus_icon} alt="Plus" />
//           </div>
//         </div>

//         {/* Playlist Box */}
//         <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1">
//           <h1>Create Your First Playlist</h1>
//           <p className="font-light text-sm">It's easy, we will help you</p>
//           <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
//             Create Playlist
//           </button>
//         </div>
//         <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1">
//           <h1>Let's findsome podcast to follow</h1>
//           <p className="font-light text-sm">
//             We'll keep you update on new episodes
//           </p>
//           <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
//             Browse podcasts
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

const navigate = useNavigate();

  return (
    <div
      className={`h-screen p-2 flex-col gap-2 text-white hidden lg:flex transition-all duration-300 ${
        isOpen ? "w-[25%]" : "w-[80px]"
      }`}
    >
      {/* Toggle Button */}
      <button
        className="self-end m-2 bg-[#242424] p-2 rounded cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Top section */}
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div onClick={()=>navigate('/')} className="flex items-center gap-3 pl-4 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="Home" />
          {isOpen && <p className="font-bold">Home</p>}
        </div>
        <div className="flex items-center gap-3 pl-4 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="Search" />
          {isOpen && <p className="font-bold">Search</p>}
        </div>
      </div>

      {/* Library Section */}
      {isOpen && (
        <div className="bg-[#121212] h-[85%] rounded mt-2 overflow-y-auto">
          {/* Header */}
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer">
              <img className="w-6" src={assets.stack_icon} alt="Library" />
              <p className="font-semibold">Your Library</p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-5" src={assets.arrow_icon} alt="Arrow" />
              <img className="w-5" src={assets.plus_icon} alt="Plus" />
            </div>
          </div>

          {/* Playlist Box */}
          <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1">
            <h1>Create Your First Playlist</h1>
            <p className="font-light text-sm">It's easy, we will help you</p>
            <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
              Create Playlist
            </button>
          </div>
          <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1">
            <h1>Let's find some podcasts to follow</h1>
            <p className="font-light text-sm">
              We'll keep you updated on new episodes
            </p>
            <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
              Browse podcasts
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
