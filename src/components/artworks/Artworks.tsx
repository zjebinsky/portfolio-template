import ArtworkCard from "./ArtworkCard";
import {artworks} from "./data.js";

const Artworks = () => {
  return (
    <div className=" gridcontainer p-4">
      {artworks.map((artwork) => (
        <div className="w-full" key={artwork.Id}>
          <ArtworkCard
            image={artwork.Image}
            name={artwork.Name}
            id={artwork.Id}
          />
        </div>
      ))}
    </div>
  );
};
export default Artworks;
