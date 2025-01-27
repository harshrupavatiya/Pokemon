import paginationProps from "../interfaces/paginationInterfaces";

const Pagination = ({
  setCurrentPage,
  setCardData,
  currentPage,
  lastPage,
}: paginationProps) => {
  const changePage = (page: number) => {
    if (page < 1 || page > lastPage) return;
    setCardData([]);
    setCurrentPage(page);
  };

  return (
    <div className="flex gap-2 md:gap-5 ">
      {/* first page button */}
      <button
        className=" py-1 px-3 text-sm md:text-xl md:px-5 md:py-2 rounded-md bg-white bg-opacity-65"
        disabled={currentPage === 1}
        onClick={() => {
          changePage(1);
        }}
      >
        First Page
      </button>

      {/* previous page button */}
      <button
        className=" py-1 px-3 text-sm md:text-xl md:px-5 md:py-2 rounded-md bg-white bg-opacity-65"
        disabled={currentPage === 1}
        onClick={() => {
          changePage(currentPage - 1);
        }}
      >
        {"<"}
      </button>

      {/* Main input page number */}
      <div>
        <input
          type="number"
          min={1}
          max={lastPage}
          value={currentPage}
          onChange={(e) => {
            setCurrentPage(parseInt(e.target.value));
          }}
          className=" py-1 px-2 text-center text-sm md:text-xl md:px-5 md:py-2 rounded-md border-zinc-200 border-2 bg-white bg-opacity-65"
        />{" "}
        {` / ${lastPage}`}
      </div>

      {/* next page button */}
      <button
        className=" py-1 px-3 text-sm md:text-xl md:px-5 md:py-2 rounded-md bg-white bg-opacity-65"
        disabled={currentPage === lastPage}
        onClick={() => {
          changePage(currentPage + 1);
        }}
      >
        {">"}
      </button>

      {/* last page button */}
      <button
        className=" py-1 px-3 text-sm md:text-xl md:px-5 md:py-2 rounded-md bg-white bg-opacity-65"
        disabled={currentPage === lastPage}
        onClick={() => {
          changePage(lastPage);
        }}
      >
        Last Page
      </button>
    </div>
  );
};

export default Pagination;
