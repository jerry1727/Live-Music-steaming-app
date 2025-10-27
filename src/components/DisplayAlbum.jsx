// import React from "react";
// import Navbar from "./Navbar";
// import { useParams } from "react-router-dom";
// import { albumsData } from "../assets/assets";

// const DisplayAlbum = () => {
//   const { id } = useParams();
//   const albumsData = albumsData[id];
//   console.log(albumsData);

//   return (
//     <>
//       <Navbar />
//       <div className="mt-10 gap-8 flex-col md:flex-row md:items-end">
//         <img src={albumsData.image} alt="" />
//       </div>
//     </>
//   );
// };

// export default DisplayAlbum;

// #############################################################################

// import React from "react";
// import Navbar from "./Navbar";
// import { useParams } from "react-router-dom";
// import { albumsData, assets, songsData } from "../assets/assets";

// const DisplayAlbum = () => {
//   const { id } = useParams();
//   const album = albumsData[id];

//   if (!album) {
//     return (
//       <>
//         <Navbar />
//         <div className="mt-10 text-center text-red-500">Album not found.</div>
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="mt-10 gap-8 flex-col md:flex-row md:items-end">
//         <img
//           className="w-48 rounded"
//           src={album.image}
//           alt={album.title || "Album"}
//         />
//         <div className="flex flex-col">
//           <p>Playlists</p>
//           <h2 className="text-5xl font-bold mb-4 md:text-7xl">
//             {albumsData.name}
//           </h2>
//           <h4>{albumsData.desc}</h4>
//           <p className="mt-1">
//             <img
//               className="inline-block w-5"
//               src={assets.spotify_logo}
//               alt=""
//             />
//             <b>Spotify</b>• 1,133,334 likes • <b>50 songs, </b>
//             about 2 hr 30 min
//           </p>
//         </div>
//       </div>
//       <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
//         <p>
//           <b className="mr-4">#</b>Title
//         </p>
//         <p>Album</p>
//         <p className="hidden sm:block">Date Added</p>
//         <img className="m-auto w-4" src={assets.clock_icon} alt="" />
//       </div>
//       <hr />
//       {songsData.map((item, index) => (
//         <div
//           key={index}
//           className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
//         >
//           <p className="text-white">
//             <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
//             <img className="inline w-10 mr-5" src={item.image} alt="" />
//             {item.name}
//           </p>
//           <p className="text-[15px]">{albumsData.name}</p>
//           <p className="text-[15px] hidden sm:block">5 days ago</p>
//           <p className="text-[15px] text-center">{item.duration}</p>
//         </div>
//       ))}
//     </>
//   );
// };

// export default DisplayAlbum;

//############################################################################

// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import { useParams } from "react-router-dom";
// import { albumsData, assets, songsData } from "../assets/assets";

// const DisplayAlbum = () => {
//   const { id } = useParams();
//   const album = albumsData[id];
//   const [bullets, setBullets] = useState([]);

//   if (!album) {
//     return (
//       <>
//         <Navbar />
//         <div className="mt-10 text-center text-red-500">Album not found.</div>
//       </>
//     );
//   }

//   // const addBullet = () => {
//   //   setBullets([...bullets, "New bullet point"]);
//   // };

//   return (
//     <>
//       <Navbar />
//       <div className="mt-10 gap-8 flex-col md:flex-row md:items-end">
//         <img
//           className="w-48 rounded"
//           src={album.image}
//           alt={album.title || "Album"}
//         />
//         <div className="flex flex-col">
//           <p>Playlists</p>
//           <h2 className="text-5xl font-bold mb-4 md:text-7xl">{album.name}</h2>
//           <h4>{album.desc}</h4>
//           <p className="mt-1">
//             <img
//               className="inline-block w-5"
//               src={assets.spotify_logo}
//               alt=""
//             />
//             <b>Spotify</b>
//             <span className="mx-2">&#8226;</span>
//             1,133,334 likes
//             <span className="mx-2">&#8226;</span>
//             <b>50 songs, </b>
//             about 2 hr 30 min
//           </p>
//           {/* Bullet point button and list */}
//           <button
//             className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
//             onClick={addBullet}
//           >
//             Add Bullet Point
//           </button>
//           <ul className="mt-2 list-disc pl-6">
//             {bullets.map((bullet, idx) => (
//               <li key={idx}>{bullet}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
//         <p>
//           <b className="mr-4">#</b>Title
//         </p>
//         <p>Album</p>
//         <p className="hidden sm:block">Date Added</p>
//         <img className="m-auto w-4" src={assets.clock_icon} alt="" />
//       </div>
//       <hr />
//       {songsData.map((item, index) => (
//         <div
//           key={index}
//           className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
//         >
//           <p className="text-white">
//             <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
//             <img className="inline w-10 mr-5" src={item.image} alt="" />
//             {item.name}
//           </p>
//           <p className="text-[15px]">{album.name}</p>
//           <p className="text-[15px] hidden sm:block">5 days ago</p>
//           <p className="text-[15px] text-center">{item.duration}</p>
//         </div>
//       ))}
//     </>
//   );
// };

// export default DisplayAlbum;

import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const album = albumsData[id];
  const {playWithId} = useContext(PlayerContext)

  if (!album) {
    return (
      <>
        <Navbar />
        <div className="mt-10 text-center text-red-500">Album not found.</div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="mt-10 gap-8 flex-col md:flex-row md:items-end">
        <img
          className="w-48 rounded"
          src={album.image}
          alt={album.title || "Album"}
        />
        <div className="flex flex-col">
          <p>Playlists</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">{album.name}</h2>
          <h4>{album.desc}</h4>
          <p className="mt-1">
            <img
              className="inline-block w-5"
              src={assets.spotify_logo}
              alt=""
            />
            <b>Spotify</b>
            <span className="mx-2">&#8226;</span>
            1,133,334 likes
            <span className="mx-2">&#8226;</span>
            <b>50 songs, </b>
            about 2 hr 30 min
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div onClick={()=>playWithId(item.id)}
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img className="inline w-10 mr-5" src={item.image} alt="" />
            {item.name}
          </p>
          <p className="text-[15px]">{album.name}</p>
          <p className="text-[15px] hidden sm:block">5 days ago</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
