import {useParams} from "react-router-dom";
import {artworks} from "./data";

const Artwork = () => {
  const {id} = useParams();
  console.log(id);

  return (
    <>
      <div className="w-full h-[100vh] grid grid-cols-artsm md:grid-cols-art md:gap-5 md:pl-5">
        <div className="flex justify-center items-center">
          <img
            src={artworks[id].Image}
            alt={artworks[id].Name}
            className="rounded-xl max-h-[90vh] p-4"
          />
        </div>
        <div className="flex flex-col justify-center max-w-[567px] mx-auto m-4 p-4 pb-10">
          <h1 className="text-4xl md:text-8xl font-bold">
            {artworks[id].Name}
          </h1>
          <h2 className="text-2xl md:text-5xl md:mt-5">
            {artworks[id].Style}
          </h2>
          <p className="text-md mt-5 md:text-3xl md:mt-10">
            {artworks[id].Description}
          </p>
        </div>
      </div>
    </>
  );
};
export default Artwork;
