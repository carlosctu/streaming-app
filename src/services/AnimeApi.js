import api from "./KitsuApi";

export async function trendingList() {
  const response = await api.get("/trending/anime");
  return response.data;
}

export async function getCategoryList(category, sorting = "averageRating") {
  const response = await api.get(
    `/anime?filter[categories]=${category}&sort=-${sorting}`
  );
  return response.data;
}

export async function getAnimeInfo(path) {
  const response = await api.get(path);
  return response.data?.data.attributes;
}
