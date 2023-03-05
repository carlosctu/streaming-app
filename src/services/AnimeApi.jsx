import api from "./KitsuApi";

export async function trendingList() {
  const response = await api.get("/trending/anime");
  return response.data;
}

export async function getCategoryList(category, sorting = "averageRating") {
  const response = await api.get(
    `/anime?filter[categories]=${category}&sort=-${sorting}`
  );
  console.log(response.data)
  return response.data;
}

export async function getAnimeInfo(path) {
  const response = await api.get(path);
  return response.data?.data.attributes;
}

export async function getAnimeEpisodes(id) {
  const response = await api.get(`/anime/${id}/relationships/episodes`);
  return response.data.data;
}

export async function getEpisodesData(id) {
  const response = await api.get(`/episodes/${id}`);
  return response.data;
}
