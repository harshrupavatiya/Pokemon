import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Card from "./Card";
import { cardItem, resultItem } from "../interfaces/homeInterfaces";
import pokLogo from "../assets/pokLogo.png"

const Home: React.FC = () => {

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [cardData, setCardData] = useState<cardItem[]>([]);

  useEffect(() => {
    // declaring function
    const fetchData = async (offset: number, limit: number) => {
      try {
        const data = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        );
        const resultingData = await data.json();

        const confirmData = await Promise.all(
          resultingData.results.map(async (item: resultItem) => {
            const pokData = await fetch(item.url);
            const pokResult = await pokData.json();
            return {
              pokName: item.name,
              pokUrl: item.url,
              pokImage: pokResult.sprites.front_default,
            };
          })
        );

        setCardData(confirmData);
      } catch (err) {
        console.log("Error : ", err);
      }
    };

    // call fetchData function
    fetchData((currentPage - 1) * 20, 20);

  }, [currentPage]);

  return (
    <div className="w-full min-h-screen p-10 md:p-0 bg-[url(https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/sword-shield/pokemon-in-the-wild.png)] bg-fixed bg-cover bg-center bg-no-repeat">
      <div className="md:w-5/6 mx-auto md:p-16 min-h-full ">
        <div>
          <div className="flex justify-center mb-14">
            <img className=" w-60 md:w-80" src={pokLogo} />
          </div>

          {/* Show a message if no cards are available */}
          {cardData.length === 0 ? (
            <div className=" min-h-[40rem] flex justify-center items-center">
              <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          ) : (
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mx-auto">
              {cardData.map((item: cardItem, index) => (
                <Card
                  key={index}
                  pokName={item.pokName}
                  pokImage={item.pokImage}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <Pagination
              setCurrentPage={setCurrentPage}
              setCardData={setCardData}
              currentPage={currentPage}
              lastPage={Math.ceil(1302 / 20)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
