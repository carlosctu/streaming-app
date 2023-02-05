import axios from "axios";

export async function trendingList() {
  const response = await axios.get("https://kitsu.io/api/edge/trending/anime");
  console.log(response)
  console.log("Fez requisiçãoooo")
  return response.data;
}
