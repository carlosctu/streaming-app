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
export function useCategoryList(category, sorting) {
  const {
    data: categoryList,
    loading: categoryListLoading,
    error: categoryListError,
    act: categoryListAct,
  } = useAsync(() => kitsuApi.getCategoryList(category, sorting));

  return {
    categoryList,
    categoryListLoading,
    categoryListError,
    categoryListAct,
  };
}
export function useAnimeInfo(path) {
  const {
    data: animeInfo,
    loading: animeInfoLoading,
    error: animeInfoError,
    act: animeInfoAct,
  } = useAsync(() => kitsuApi.getAnimeInfo(path));

  return {
    animeInfo,
    animeInfoLoading,
    animeInfoError,
    animeInfoAct,
  };
}
export function useAnimeCharacters(id) {
  const {
    data: animeCharacters,
    loading: animeCharactersLoading,
    error: animeCharactersError,
    act: animeCharactersAct,
  } = useAsync(() => kitsuApi.getAnimeCharacters(id));

  return {
    animeCharacters,
    animeCharactersLoading,
    animeCharactersError,
    animeCharactersAct,
  };
}
export function useAnimeEpisodes() {
  const {
    loading: animeEpisodesLoading,
    error: animeEpisodesError,
    act: animeEpisodes,
  } = useAsync(kitsuApi.getAnimeEpisodes, false);

  return {
    animeEpisodes,
    animeEpisodesLoading,
    animeEpisodesError,
  };
}
export function useEpisodeData() {
  const {
    loading: episodeDataLoading,
    error: episodeDataError,
    act: episodeData,
  } = useAsync(kitsuApi.getEpisodesData, false);

  return {
    episodeData,
    episodeDataLoading,
    episodeDataError,
  };
}
