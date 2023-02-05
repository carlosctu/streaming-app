import api from "./KitsuApi";

export async function trendingList() {
  console.log("fez request");
  const response = await api.get("/trending/anime");
  return response.data;
}

export async function getCategoryList(category, sorting = "averageRating") {
  console.log("fez request");
  const response = await api.get(
    `/anime?filter[categories]=${category}&sort=-${sorting}`
  );
  return response.data;
}
