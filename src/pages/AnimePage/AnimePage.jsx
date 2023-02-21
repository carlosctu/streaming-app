import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  useAnimeCharacters,
  useEpisodeData,
  useAnimeEpisodes,
  useAnimeInfo,
} from "../../hooks/api/useAnime";

export default function AnimePage() {
  const location = useLocation();
  const { animeInfo } = useAnimeInfo(location.state.id);
  const { animeEpisodes } = useAnimeEpisodes();
  const { episodeData } = useEpisodeData();
  const [episodesData, setEpisodesData] = useState([]);
  useEffect(() => {
    animeEpisodes(location.state.id.split("/")[2]).then((data) => {
      return data.map(async (episode) => {
        const episodeInfo = await episodeData(episode.id);
        setEpisodesData((values) => [...values, episodeInfo.data.attributes]);
      });
    });
  }, []);

  console.log(episodesData);

  const formatRating = (rating) => {
    return parseFloat(rating / 10).toFixed(1);
  };

  return (
    <HomeWrapper>
      <Poster
        coverImage={animeInfo?.posterImage.medium}
        height={animeInfo?.posterImage.meta.dimensions.medium.height}
      ></Poster>
      {episodesData.map((e) => {
        return (
          <Poster
            coverImage={e.thumbnail.tiny}
            height={e.thumbnail.meta.dimensions.tiny.height}
            width={e.thumbnail.meta.dimensions.tiny.width}
          ></Poster>
        );
      })}
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
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  margin-bottom: 16px;
`;
