import useAsync from "../useAsync";
import * as kitsuApi from "../../services/AnimeApi";

export function useTrendingList() {
  const {
    data: trendingList,
    loading: trendingListLoading,
    error: trendingListError,
    act: trendingListAct,
  } = useAsync(kitsuApi.trendingList);

  return {
    trendingList,
    trendingListLoading,
    trendingListError,
    trendingListAct,
  };
}
export function useCategoryList(category) {
  const {
    data: categoryList,
    loading: categoryListLoading,
    error: categoryListError,
    act: categoryListAct,
  } = useAsync(() => kitsuApi.getCategoryList(category));

  return {
    categoryList,
    categoryListLoading,
    categoryListError,
    categoryListAct,
  };
}
