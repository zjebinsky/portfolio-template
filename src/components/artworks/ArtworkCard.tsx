import {Link} from "react-router-dom";
import {useRef, useLayoutEffect} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

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
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: cardRef.current,
          end: "50% 80%",
          scrub: 1,
          markers: false,
        },
      }
    );
    return () => {};
  }, []);

  return (
    <>
      <div>
        <Link to={`/${id}`}>
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="cursor-pointer object-cover w-full rounded-xl"
            ref={cardRef}
          />
        </Link>
      </div>
    </>
  );
};
export default ArtworkCard;
