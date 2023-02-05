import { BsPlayCircle, BsPlayCircleFill } from "react-icons/bs";
import styled from "styled-components";
import { ButtonContainer } from "../../componets/buttons/ButtonContainer";
import ButtonIcon from "../../componets/buttons/ButtonIcon";
import { useCategoryList, useTrendingList } from "../../hooks/api/useAnime";

export default function Home() {
  const categories = Object.freeze({
    FANTASY: "fantasy",
    DRAMA: "drama",
    ROMANCE: "romance",
  });
  const sorting = Object.freeze({
    AVERAGE: "averageRating",
    POPULARITY: "popularityRank",
    FAVORITES: "favoritesCount",
    DATE: "startDate",
  });
  const { trendingList } = useTrendingList();
  const fantasyCategory = useCategoryList(
    categories.FANTASY,
    sorting.FAVORITES
  );
  const actionCategory = useCategoryList(categories.ROMANCE, sorting.AVERAGE);
  const romanceCategory = useCategoryList(categories.DRAMA, sorting.AVERAGE);
  return (
    <HomeWrapper>
      <TrendingPoster
        coverImage={trendingList?.data[1].attributes.posterImage["medium"]}
      >
        <PosterDescriptionSection>
          <h2>{trendingList?.data[1].attributes.titles["en_jp"]}</h2>
          <p>{`${trendingList?.data[1].attributes.episodeCount} episodes`}</p>
          <ButtonContainer
            description="Play"
            width="68px"
            height="28px"
            startAndornment={
              <ButtonIcon
                size="16px"
                children={<BsPlayCircleFill style={{ paddingTop: "2px" }} />}
              />
            }
            borderRadius={false}
            backgroundColor="#d93a41"
          />
        </PosterDescriptionSection>
      </TrendingPoster>
      <TrendingCarrouselContainer category={trendingList} />
      {/* <CategoryCarrouselContainer
        category={actionCategory}
        title={"Romance Checkpoint"}
      />
      <CategoryCarrouselContainer
        category={fantasyCategory}
        title={"Just updated"}
      />
      <CategoryCarrouselContainer
        category={romanceCategory}
        title={"Shounen animes"}
      />
      <div>asçdajkldjaldkasjdlkasjlk</div> */}
    </HomeWrapper>
  );
}

const formatRating = (rating) => {
  return parseFloat(rating / 10).toFixed(1);
};
const validateCategoryList = (anime) => {
  return (
    !anime.titles["en_jp"] ||
    !anime.titles["en"] ||
    formatRating(anime.averageRating) == "0.0"
  );
};
const handleAnimeTitle = (title) => {
  return title["en"] === undefined ? title["en_jp"] : title["en"];
};

export function TrendingCarrouselContainer(props) {
  return (
    <CarrouselWrapper>
      <CarrouselTitleSection>
        <h3>Trending Animes</h3>
        <span>See all</span>
      </CarrouselTitleSection>
      <TrendingCarrousel>
        {props.category?.data.map((data, index) => {
          const anime = data.attributes;
          if (validateCategoryList(anime)) return;
          return (
            <div
              key={index}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <TrendingAnimeContainer coverImage={anime.posterImage["small"]}>
                <div style={{ borderRadius: "4px" }}>
                  {formatRating(anime.averageRating)}
                </div>
              </TrendingAnimeContainer>
              <CarrouselDescriptionSection>
                <p>{handleAnimeTitle(anime.titles)}</p>
              </CarrouselDescriptionSection>
            </div>
          );
        })}
      </TrendingCarrousel>
    </CarrouselWrapper>
  );
}

export function CategoryCarrouselContainer(props) {
  return (
    <CarrouselWrapper>
      <CarrouselTitleSection>
        <h3>{props.title}</h3>
        <span>See all</span>
      </CarrouselTitleSection>
      <TrendingCarrousel>
        {props.category.categoryList?.data.map((data) => {
          const anime = data.attributes;
          if (validateCategoryList(anime)) return;
          return (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TrendingAnimeContainer coverImage={anime.posterImage["small"]}>
                <div style={{ borderRadius: "4px" }}>
                  {formatRating(anime.averageRating)}
                </div>
              </TrendingAnimeContainer>
              <CarrouselDescriptionSection>
                <p>{handleAnimeTitle(anime.titles)}</p>
              </CarrouselDescriptionSection>
            </div>
          );
        })}
      </TrendingCarrousel>
    </CarrouselWrapper>
  );
}

const PosterDescriptionSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  padding: 12px 12px;
  row-gap: 6px;
  color: white;
  h2 {
    font-size: 18px;
    font-weight: bold;
  }
  p {
    font-size: 15px;
  }
`;

const TrendingPoster = styled.div`
  display: flex;
  background-image: url(${(props) => props.coverImage});
  background-size: cover;
  background-position-y: 30%;
  background-repeat: no-repeat;
  height: 360px;
  width: 100%;
`;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const CarrouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 0 12px;
`;

const CarrouselTitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 12px;
  span {
    color: #d93a41;
    font-weight: bold;
  }
  h3 {
    font-size: 22px;
  }
`;

const CarrouselDescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  flex-wrap: wrap;
  width: 160px;
  /* height: 110px; */
  color: black;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  p {
    font-size: 15px;
  }
  div:first-child {
    width: 100%;
    display: flex;
  }
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
  height: 240px;
  width: 160px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
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