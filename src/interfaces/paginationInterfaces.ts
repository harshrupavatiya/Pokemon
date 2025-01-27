import { Dispatch, SetStateAction } from "react";
import { cardItem } from "./homeInterfaces";

interface paginationProps {
    setCurrentPage: Dispatch<SetStateAction<number>>,
    setCardData: Dispatch<SetStateAction<cardItem[]>>,
    currentPage: number,
    lastPage: number,
}

export default paginationProps;