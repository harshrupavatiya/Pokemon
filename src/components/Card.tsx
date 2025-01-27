import { Link } from "react-router-dom";
import { cardItem } from "../interfaces/homeInterfaces";
import pokBall from "../assets/pokBall.png";

const Card = ({ pokName, pokImage }: cardItem) => {
  const image = pokImage ? pokImage : pokBall;
  return (
    <Link to={`/carddetails/${pokName}`}>
      <div className="w-full p-6 border-2 border-gray-100 rounded-lg shadow-lg hover:border-gray-700 transition-all bg-white bg-opacity-75">
        <div className="w-full object-cover">
          <img
            className="w-full object-cover rounded-t-lg"
            src={image}
            alt={pokName}
          />
        </div>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-center capitalize font-bold">
          {pokName}
        </p>
      </div>
    </Link>
  );
};

export default Card;
