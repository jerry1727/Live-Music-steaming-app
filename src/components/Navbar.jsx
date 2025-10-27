import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">
            Install App
          </p>
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            D
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
          All
        </p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">
          Podcasts
        </p>
      </div>
    </>
  );
};

export default Navbar;



// import React, { useState } from "react";
// import { assets } from "../assets/assets";
// import { useNavigate } from "react-router-dom";
// import { Home, Music } from "lucide-react"; // icons (optional)

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div
//       className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-all duration-300 ${
//         isOpen ? "w-64" : "w-20"
//       }`}
//     >
//       {/* Toggle button */}
//       <button
//         className="absolute top-4 right-4 bg-gray-700 p-2 rounded-md"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? "✖" : "☰"}
//       </button>

//       {/* Top Section */}
//       <div className="flex items-center gap-2 p-4">
//         <img
//           onClick={() => navigate(-1)}
//           className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
//           src={assets.arrow_left}
//           alt=""
//         />
//         <img
//           onClick={() => navigate(1)}
//           className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
//           src={assets.arrow_right}
//           alt=""
//         />
//       </div>

//       {/* Content */}
//       {isOpen ? (
//         <div className="p-4 space-y-4">
//           <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl cursor-pointer">
//             Explore Premium
//           </p>
//           <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">
//             Install App
//           </p>
//           <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
//             D
//           </p>

//           <div className="flex items-center gap-2 mt-6">
//             <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
//               All
//             </p>
//             <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
//             <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">
//               Podcasts
//             </p>
//           </div>
//         </div>
//       ) : (
//         <div className="flex flex-col items-center gap-6 mt-8">
//           <Home className="w-6 h-6 cursor-pointer" />
//           <Music className="w-6 h-6 cursor-pointer" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;




// import React, { useState } from "react";
// import { assets } from "../assets/assets";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div
//       className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-all duration-300 ${
//         isOpen ? "w-64" : "w-20"
//       }`}
//     >
//       {/* Toggle button */}
//       <button
//         className="absolute top-4 right-2 bg-gray-700 p-2 rounded-md"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? "✖" : "☰"}
//       </button>

//       {/* Arrows (always visible) */}
//       <div className="flex items-center gap-2 p-4">
//         <img
//           onClick={() => navigate(-1)}
//           className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
//           src={assets.arrow_left}
//           alt="Back"
//         />
//         <img
//           onClick={() => navigate(1)}
//           className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
//           src={assets.arrow_right}
//           alt="Forward"
//         />
//       </div>

//       {/* Content */}
//       {isOpen ? (
//         <div className="p-4 space-y-4">
//           <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl cursor-pointer">
//             Explore Premium
//           </p>
//           <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">
//             Install App
//           </p>
//           <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
//             D
//           </p>

//           <div className="flex items-center gap-2 mt-6">
//             <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
//               All
//             </p>
//             <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">
//               Music
//             </p>
//             <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">
//               Podcasts
//             </p>
//           </div>
//         </div>
//       ) : (
//         <div className="flex flex-col items-center gap-6 mt-8">
//           <img
//             src={assets.home_icon} // replace with your home icon
//             alt="Home"
//             className="w-6 h-6 cursor-pointer"
//           />
//           <img
//             src={assets.music_icon} // replace with your music icon
//             alt="Music"
//             className="w-6 h-6 cursor-pointer"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
