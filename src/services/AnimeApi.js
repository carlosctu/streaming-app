import api from "./KitsuApi";

export async function trendingList() {
  const response = await api.get("/trending/anime");
  console.log("veiooooooooooooooooo");
  return response.data;
}

export async function getCategoryList(category) {
  const response = await api.get(`/categories/${category}/anime`);
  console.log("Category");
  return response.data;
}
