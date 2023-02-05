import styled from "styled-components";
import { useCategoryList, useTrendingList } from "../../hooks/api/useAnime";

export default function Home() {
  const categories = Object.freeze({
    FANTASY: "10",
    ACTION: "16",
    ROMANCE: "5",
    MAGIC: "7",
  });
  const { trendingList } = useTrendingList();
  const fantasyCategory = useCategoryList(categories.FANTASY);
  const actionCategory = useCategoryList(categories.ACTION);
  const romanceCategory = useCategoryList(categories.ROMANCE);
  const magicCategory = useCategoryList(categories.magicCategory);
  console.log(fantasyCategory.categoryList);
  //   console.log(trendingList);
  return (
    <HomeWrapper>
      <div>
        <h3>Trending animes</h3>
        <p>See all</p>
      </div>
      <TrendingCarrousel>
        {trendingList?.data.map((data) => {
          const anime = data.attributes;
          return (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TrendingAnimeContainer
                // coverImage={google}
                coverImage={anime.posterImage["small"]}
              >
                <div>{parseFloat(anime.averageRating / 10).toFixed(1)}</div>
              </TrendingAnimeContainer>
              <div
                style={{
                  display: "flex",
                  wordWrap: "break-word",
                  flexWrap: "wrap",
                  width: "140px",
                  height: "80px",
                  alignContent: "center",
                  backgroundColor: "#4b6043",
                  color: "white",
                  padding: "8px 0 8px 8px",
                }}
              >
                <p style={{ fontSize: "15px" }}>
                  {anime.titles["en"] === undefined
                    ? anime.titles["en_jp"]
                    : anime.titles["en"]}
                </p>
              </div>
            </div>
          );
        })}
      </TrendingCarrousel>
      <TrendingCarrousel>
        {fantasyCategory.categoryList?.data.map((data) => {
          const anime = data.attributes;
          return (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TrendingAnimeContainer
                // coverImage={google}
                coverImage={anime.posterImage["small"]}
              >
                <div>{parseFloat(anime.averageRating / 10).toFixed(1)}</div>
              </TrendingAnimeContainer>
              <div
                style={{
                  display: "flex",
                  wordWrap: "break-word",
                  flexWrap: "wrap",
                  width: "140px",
                  height: "80px",
                  alignContent: "center",
                  backgroundColor: "#4b6043",
                  color: "white",
                  padding: "8px 0 8px 8px",
                }}
              >
                <p style={{ fontSize: "15px" }}>
                  {anime.titles["en"] === undefined
                    ? anime.titles["en_jp"]
                    : anime.titles["en"]}
                </p>
              </div>
            </div>
          );
        })}
      </TrendingCarrousel>
      <TrendingCarrousel>
        {actionCategory.categoryList?.data.map((data) => {
          const anime = data.attributes;
          return (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TrendingAnimeContainer
                // coverImage={google}
                coverImage={anime.posterImage["small"]}
              >
                <div>{parseFloat(anime.averageRating / 10).toFixed(1)}</div>
              </TrendingAnimeContainer>
              <div
                style={{
                  display: "flex",
                  wordWrap: "break-word",
                  flexWrap: "wrap",
                  width: "140px",
                  height: "80px",
                  alignContent: "center",
                  backgroundColor: "#4b6043",
                  color: "white",
                  padding: "8px 0 8px 8px",
                }}
              >
                <p style={{ fontSize: "15px" }}>
                  {anime.titles["en"] === undefined
                    ? anime.titles["en_jp"]
                    : anime.titles["en"]}
                </p>
              </div>
            </div>
          );
        })}
      </TrendingCarrousel>
      <TrendingCarrousel>
        {romanceCategory.categoryList?.data.map((data) => {
          const anime = data.attributes;
          return (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TrendingAnimeContainer
                // coverImage={google}
                coverImage={anime.posterImage["small"]}
              >
                <div>{parseFloat(anime.averageRating / 10).toFixed(1)}</div>
              </TrendingAnimeContainer>
              <div
                style={{
                  display: "flex",
                  wordWrap: "break-word",
                  flexWrap: "wrap",
                  width: "140px",
                  height: "80px",
                  alignContent: "center",
                  backgroundColor: "#4b6043",
                  color: "white",
                  padding: "8px 0 8px 8px",
                }}
              >
                <p style={{ fontSize: "15px" }}>
                  {anime.titles["en"] === undefined
                    ? anime.titles["en_jp"]
                    : anime.titles["en"]}
                </p>
              </div>
            </div>
          );
        })}
      </TrendingCarrousel>
      <TrendingCarrousel>
        {magicCategory.categoryList?.data.map((data) => {
          const anime = data.attributes;
          return (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TrendingAnimeContainer
                // coverImage={google}
                coverImage={anime.posterImage["small"]}
              >
                <div>{parseFloat(anime.averageRating / 10).toFixed(1)}</div>
              </TrendingAnimeContainer>
              <div
                style={{
                  display: "flex",
                  wordWrap: "break-word",
                  flexWrap: "wrap",
                  width: "140px",
                  height: "80px",
                  alignContent: "center",
                  backgroundColor: "#4b6043",
                  color: "white",
                  padding: "8px 0 8px 8px",
                }}
              >
                <p style={{ fontSize: "15px" }}>
                  {anime.titles["en"] === undefined
                    ? anime.titles["en_jp"]
                    : anime.titles["en"]}
                </p>
              </div>
            </div>
          );
        })}
      </TrendingCarrousel>
      <div>asçdajkldjaldkasjdlkasjlk</div>
      <p>askdajslkdjaldajsldajsdlajsdlkasj</p>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TrendingCarrousel = styled.div`
  display: grid;
  grid-auto-flow: column;
  flex-direction: row;
  overflow-x: scroll;
  width: 100%;
  column-gap: 8px;
`;
const TrendingAnimeContainer = styled.div`
  display: flex;
  background-image: url(${(props) => props.coverImage});
  background-size: cover;
  background-repeat: no-repeat;
  height: 200px;
  width: 140px;
  font-size: 50px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 0 8px;
    width: 26px;
    height: 20px;
    color: white;
    background-color: #d93a41;
    font-size: 12px;
  }
`;
