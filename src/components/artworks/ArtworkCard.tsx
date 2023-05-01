import {Link} from "react-router-dom";

interface ArtworksProps {
  image: string;
  name: string;
  id: number;
}

const ArtworkCard = ({
  image,
  name,
  id,
}: ArtworksProps) => {
  return (
    <>
      <div>
        <Link to={`/${id}`}>
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="cursor-pointer object-cover w-full rounded-xl"
          />
        </Link>
      </div>
    </>
  );
};
export default ArtworkCard;
