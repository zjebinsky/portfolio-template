import {useParams} from "react-router-dom";
import {artworks} from "./data";

interface Artwork {
  Name: string;
  Style: string;
  Description: string;
  Image: string;
}

interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}

const Artwork = () => {
  const {id} = useParams<RouteParams>();
  console.log(id);

  const artwork: Artwork =
    artworks[parseInt(id!)];

  return (
    <>
      <div className="w-full h-[100vh] grid grid-cols-artsm md:grid-cols-art md:gap-5 md:pl-5">
        <div className="flex justify-center items-center">
          <img
            src={artwork.Image}
            alt={artwork.Name}
            className="rounded-xl max-h-[90vh] p-4"
          />
        </div>
        <div className="flex flex-col justify-center max-w-[567px] mx-auto m-4 p-4 pb-10">
          <h1 className="text-4xl md:text-8xl font-bold">
            {artwork.Name}
          </h1>
          <h2 className="text-2xl md:text-5xl md:mt-5">
            {artwork.Style}
          </h2>
          <p className="text-md mt-5 md:text-3xl md:mt-10">
            {artwork.Description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Artwork;
