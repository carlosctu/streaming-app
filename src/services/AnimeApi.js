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
  console.log(path);
  const response = await api.get(path);
  console.log(response.data);
  return response.data;
}
