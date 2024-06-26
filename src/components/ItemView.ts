import { ListType, PartialMovieDataForItemView } from "../type/movie";
import { createElementWithAttribute } from "../utils";
import scrollToTop from "../utils/scrollToTop";

import { removeErrorView } from "./ErrorView";
import ItemCardList from "./ItemCardList";
import LoadMore from "./LoadMore";
import Title from "./Title";

const $main = document.querySelector("main");

const makeSection = (titleText: string) => {
  const $viewContainer = createElementWithAttribute("div", {
    class: "item-view-container",
  });
  const $itemCardList = createElementWithAttribute("ul", {
    class: "item-list",
  });
  $viewContainer.appendChild(Title(titleText));
  $viewContainer.appendChild($itemCardList);
  return $viewContainer;
};

interface ItemViewProps {
  titleText: string;
  movieData: PartialMovieDataForItemView;
  listType: ListType;
}

const renderItemView = ({ titleText, movieData, listType }: ItemViewProps) => {
  scrollToTop();
  removeErrorView();
  const $itemView = createElementWithAttribute("section", {
    class: "item-view",
  });
  $itemView.appendChild(makeSection(titleText));
  $main?.appendChild($itemView);

  ItemCardList(movieData.movieList);
  LoadMore(listType, movieData.isEndPage);
};
export default renderItemView;
