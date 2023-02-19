import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useAnimeInfo } from "../../hooks/api/useAnime";

export default function AnimePage() {
  const location = useLocation();
  console.log(location.state);
  const { animeInfo } = useAnimeInfo(location.state.id);
  console.log(animeInfo);
  //   const data = animeInfo?.data.attributes;
  const formatRating = (rating) => {
    return parseFloat(rating / 10).toFixed(1);
  };
  return (
    <HomeWrapper>
      <Poster
        coverImage={animeInfo?.posterImage.medium}
        height={animeInfo?.posterImage.meta.dimensions.medium.height}
      ></Poster>
      <div>{animeInfo?.canonicalTitle}</div>
      <p>Rating: {formatRating(animeInfo?.averageRating)}</p>
      <p>{animeInfo?.ageRatingGuide}</p>
      <p>{animeInfo?.description.split(`(`)[0]}</p>
      <p>Cast:</p>
      
      <p>Trailer:</p>
      <iframe
        width="100%"
        height="280px"
        src={`https://www.youtube.com/embed/${animeInfo?.youtubeVideoId}`}
        title="Chainsaw Man - Main Trailer ／『チェンソーマン』本予告"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const Poster = styled.div`
  display: flex;
  background-image: url(${(props) => props.coverImage});
  background-size: cover;
  background-position-y: 15%;
  background-repeat: no-repeat;
  height: ${(props) => `${props.height}px`};
  width: 100%;
  margin-bottom: 16px;
`;
