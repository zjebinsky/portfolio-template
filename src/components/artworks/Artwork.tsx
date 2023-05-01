import {useParams} from "react-router-dom";
import {artworks} from "./data";
import {gsap} from "gsap";
import {useRef, useLayoutEffect} from "react";

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
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const comp = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    let ctx = gsap.context(() => {
      tl.fromTo(
        imageRef.current,
        {
          opacity: 0,
          x: 300,
          scale: 0.5,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        },
        "key"
      ).fromTo(
        textRef.current,
        {opacity: 0, scale: 0.5},
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        },
        "key"
      );
    }, comp);
    return () => ctx.revert();
  }, []);

  const artwork: Artwork =
    artworks[parseInt(id!)];

  return (
    <>
      <div
        className="w-full h-[100vh] grid grid-cols-artsm md:grid-cols-art md:gap-5 md:pl-5"
        ref={comp}
      >
        <div className="flex justify-center items-center">
          <img
            src={artwork.Image}
            alt={artwork.Name}
            className="rounded-xl max-h-[90vh] p-4"
            ref={imageRef}
          />
        </div>
        <div
          className="flex flex-col justify-center max-w-[567px] mx-auto m-4 p-4 pb-10"
          ref={textRef}
        >
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
