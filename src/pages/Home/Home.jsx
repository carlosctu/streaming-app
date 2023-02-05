import { useEffect, useState } from "react";
import styled from "styled-components";
import google from "../../assets/google.png";
import useTrendingList from "../../hooks/api/useAnime";
import { trendingList } from "../../services/AnimeApi";

export default function Home() {
  const { trendingList } = useTrendingList();
  console.log(trendingList);
  // console.log(trendingList?.data[0].averageRating);
  //   const [data, setData] = useState(
  // trendingList.data[0].attributes.coverImage["original"]
  //   );
  const rating = "85.5";
  return (
    <HomeWrapper>
      <div>
        <h3>Trending animes</h3>
        <p>See all</p>
      </div>
      <TrendingCarrousel>
        {trendingList?.data.map((data) => {
          const anime = data.attributes;
          console.log(anime.titles["en"]);
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
