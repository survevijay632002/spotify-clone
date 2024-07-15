import { useParams } from "react-router-dom";
import { albumsData, assets } from "../assets/assets";
import { songsData } from "../assets/assets";
const DisplayAlbum = () => {
  const { id } = useParams();
  const albumdata = albumsData[id];

  return (
    <>
      <div className=" mt-10 flex gap-8 flex-col md:flex md:flex-row md:items-end">
        <img src={albumdata.image} className="w-48 rounded" alt="" />
        <div className=" flex flex-col">
          <p>Playlist</p>
          <h2 className=" text-5xl font-bold mb-4 md:text-7xl">
            {albumdata.name}
          </h2>
          <h4>{albumdata.desc}</h4>
          <p className="mt-1 flex felx-row gap-2">
            <img
              src={assets.spotify_logo}
              className=" inline-block w-5 "
              alt=""
            />
            <b>Spotify</b>
            132511245, likes
            <b>50 songs,</b>
            about 2 hr 30 min
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-3  sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img src={assets.clock_icon} className="m-auto w-4" alt="" />
      </div>
      <hr />
      {songsData.map((item, index) => {
        // Sahi destructuring
        return (
          <div
            key={index}
            className="grid grid-cols-3  sm:grid-cols-4  my-5 items-center"
          >
            <p className="text-white">
              <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>{" "}
              {/* corrected className */}
              <img src={item.image} className="inline w-10 mr-5" alt="d" />{" "}
              {/* corrected className */}
              {item.name}
            </p>
            <p className="text-[15px]"> {albumdata.name}</p>
            <p className="text-[15px] hidden sm:block ">5 days ago</p>
            <p className=" text-center text-[15px]">{item.duration}</p>
          </div>
        );
      })}
    </>
  );
};

export default DisplayAlbum;
