import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router";
import { cardDetail } from "../interfaces/cardDetails";
import { FaMicrophone } from "react-icons/fa";
import pokBall from "../assets/pokBall.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CardDetails: React.FC = () => {
  const params = useParams();

  const [details, setDetails] = useState<cardDetail | null>(null);
  const [flag, setFlag] = useState<boolean>(true);
  const readMoreStyle = useRef<HTMLDivElement | undefined>();

  const fetchApi = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
    const resultingData = await data.json();
    setDetails(resultingData);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const abc = () => {
    if (flag) {
      readMoreStyle.current.style.height = "100%";
      readMoreStyle.current.style.maxHeight = "100%";
    } else {
      readMoreStyle.current.style.maxHeight = "9.25rem";
    }
  };

  const playSound = () => {
    if (details?.cries?.latest) {
      const myAudio = new Audio(details?.cries?.latest);
      myAudio.play();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=" min-h-screen md:py-16 bg-[url(https://img.freepik.com/free-photo/digital-art-style-river-nature-landscape_23-2151825773.jpg?t=st=1737614531~exp=1737618131~hmac=48e283e6e40e3aa3553e0aa5f73b4c1afbe867f663356b0ce3230a7894555832&w=1380)] bg-fixed bg-cover bg-center bg-no-repeat">
      {details == null ? (
        <div className="w-full min-h-screen flex justify-center items-center">
          {/* Loading container */}
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="relative text-white flex flex-col px-8 xl:px-12 md:flex-row md:w-5/6 mx-auto md:border border-gray-200 rounded-xl bg-black bg-opacity-65">
          {/* heading for small screen */}
          <div className=" block md:hidden pt-20">
            <div className="flex justify-between">
              <h2 className=" font-bold text-2xl capitalize">{details.name}</h2>
              <button className="flex border-2 justify-center items-center px-2 gap-2 rounded-full">
                <FaMicrophone />
                <p>Play Sound</p>
              </button>
            </div>

            <div className="mt-3 flex gap-10">
              <p className="">
                <span className="font-medium">height :</span> {details.height}
              </p>
              <p className="">
                <span className="font-medium">weight :</span> {details.weight}
              </p>
            </div>
          </div>

          {/* Image container for big screen */}
          <div className=" hidden md:grid h-full w-2/4 pr-6 py-20 grid-cols-2">
              <div className=" xl:p-12 object-cover hover:border-2 border-gray-100 rounded-md">
                <img
                  src={
                    details.sprites.other.home.front_default == null
                      ? pokBall
                      : details.sprites.other.home.front_default
                  }
                  className="w-full object-cover"
                />
              </div>
              <div className=" xl:p-12 object-cover hover:border-2 border-gray-100 rounded-md">
                <img
                  src={
                    details.sprites.other.showdown.front_default == null
                      ? pokBall
                      : details.sprites.other.showdown.front_default
                  }
                  className="w-full"
                />
              </div>
              <div className=" xl:p-12 object-cover hover:border-2 border-gray-100 rounded-md">
                <img
                  src={
                    details.sprites.other.home.front_shiny == null
                      ? pokBall
                      : details.sprites.other.home.front_shiny
                  }
                  className="w-full"
                />
              </div>
              <div className=" xl:p-12 object-cover hover:border-2 border-gray-100 rounded-md">
                <img
                  src={
                    details.sprites.other.showdown.front_shiny == null
                      ? pokBall
                      : details.sprites.other.showdown.front_shiny
                  }
                  className="w-full"
                />
              </div>
          </div>
          {/* Image container for small screen */}
          <div className="w-full grid md:hidden grid-cols-1">
            <Slider {...settings}>
              <div className=" xl:p-12 object-cover hover:border-2 border-gray-100 rounded-md">
                <img
                  src={
                    details.sprites.other.home.front_default == null
                      ? pokBall
                      : details.sprites.other.home.front_default
                  }
                  className="w-full object-cover"
                />
              </div>
              <div className=" xl:p-12 object-cover hover:border-2 border-gray-100 rounded-md">
                <img
                  src={
                    details.sprites.other.showdown.front_default == null
                      ? pokBall
                      : details.sprites.other.showdown.front_default
                  }
                  className="w-full"
                />
              </div>
              <div className=" xl:p-12 object-cover hover:border-2 border-gray-100 rounded-md">
                <img
                  src={
                    details.sprites.other.home.front_shiny == null
                      ? pokBall
                      : details.sprites.other.home.front_shiny
                  }
                  className="w-full"
                />
              </div>
              <div className=" xl:p-12 object-cover hover:border-2 border-gray-100 rounded-md">
                <img
                  src={
                    details.sprites.other.showdown.front_shiny == null
                      ? pokBall
                      : details.sprites.other.showdown.front_shiny
                  }
                  className="w-full"
                />
              </div>
            </Slider>
          </div>

          {/* Pokemon details */}
          <div className="w-full md:w-2/4 pb-20 md:py-20 xl:px-12">
            {/* Small screen heading */}
            <div className=" hidden md:block">
              <div className="flex justify-between">
                <h2 className=" font-bold text-3xl capitalize">
                  {details.name}
                </h2>
                <button
                  className="px-4 py-1 flex justify-center items-center gap-2 border-2 border-gray-200 rounded-full"
                  onClick={playSound}
                >
                  <FaMicrophone size={16} />
                  <p>Play Sound</p>
                </button>
              </div>

              <div className="mt-3 flex gap-10">
                <p className=" text-md">
                  <span className="font-medium">height :</span> {details.height}
                </p>
                <p className=" text-md">
                  <span className="font-medium">weight :</span> {details.weight}
                </p>
              </div>
            </div>

            {/* Details.Abilities container */}
            <div className="mt-3 md:mt-5 ">
              <h3 className="ml-4 md:text-lg font-semibold">Abilities : </h3>
              <div className="p-2 md:p-3 overflow-hidden text-sm md:text-base flex gap-2 md:gap-3 shadow-inner border md:border-2 rounded-lg border-gray-400">
                {details.abilities.map((item, index) => (
                  <p className=" px-2 py-1 rounded-md bg-gray-500" key={index}>
                    {item.ability.name}
                  </p>
                ))}
              </div>
            </div>

            {/* Details.Types container */}
            <div className="mt-3 md:mt-5 ">
              <h3 className="ml-4 text-lg font-semibold">Types : </h3>
              <div className="p-2 md:p-3 text-sm md:text-base flex gap-2 md:gap-3 shadow-inner border md:border-2 rounded-lg border-gray-400">
                {details.types.map((item, index) => (
                  <p className=" px-2 py-1 rounded-md  bg-gray-500" key={index}>
                    {item.type.name}
                  </p>
                ))}
              </div>
            </div>

            {/* Details.Moves container */}
            <div className="relative mt-3 pb-7 md:pb-8 md:mt-5 ">
              <h3 className="ml-4 text-lg font-semibold">Moves : </h3>
              <div
                ref={readMoreStyle}
                className=" max-h-[9.2rem] overflow-hidden p-2 md:p-3 text-sm md:text-base flex flex-wrap gap-2 md:gap-3 shadow-inner border md:border-2 rounded-l-lg rounded-tr-lg border-gray-400"
              >
                {details.moves.map((item, index) => (
                  <p className=" px-2 py-1 rounded-md  bg-gray-500" key={index}>
                    {item.move.name}
                  </p>
                ))}
                <button
                  className="bg-gray-400 px-3 py-1 italic text-sm md:text-base rounded-b-lg absolute right-0 bottom-0"
                  onClick={() => {
                    setFlag(!flag);
                    abc();
                  }}
                >
                  {flag ? "Read More >" : "< Read Less"}
                </button>
              </div>
            </div>
          </div>

          {/* Back button */}
          <Link to={"/"}>
            <div className="absolute left-0 top-0 px-4 rounded-full mt-4 ml-4 text-lg md:text-2xl border-2 text-gray-200">
              {"< "}Back
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CardDetails;
