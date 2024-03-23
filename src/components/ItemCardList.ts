import { NO_ITEM_TEXT } from "../constants/system";
import { Movie } from "../type/movie";
import { createElementWithAttribute } from "../utils";

import ItemCard from "./ItemCard";

const NoItem = () => {
  const $noItem = document.createElement("li");
  $noItem.textContent = NO_ITEM_TEXT;

  return $noItem;
};

const ItemCardList = (movieList: Movie[] | undefined) => {
  const $ul = createElementWithAttribute("ul", {
    class: "item-list",
  });
  if (movieList && movieList.length > 0) {
    movieList.map((movie) => $ul.appendChild(ItemCard(movie)));
  } else {
    $ul.classList.add("no-item-list");
    $ul.appendChild(NoItem());
  }
  return $ul;
};
export default ItemCardList;
