import useAsync from "../useAsync";
import * as kitsuApi from "../../services/AnimeApi";

export default function useTrendingList() {
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
