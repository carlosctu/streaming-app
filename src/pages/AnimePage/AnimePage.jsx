import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  useEpisodeData,
  useAnimeEpisodes,
  useAnimeInfo,
} from "../../hooks/api/useAnime";

export default function AnimePage() {
  const location = useLocation();
  const { animeInfo } = useAnimeInfo();
  const { animeEpisodes } = useAnimeEpisodes();
  const { episodeData } = useEpisodeData();
  const [episodesData, setEpisodesData] = useState([]);
  const [animeData, setAnimeData] = useState();

  useEffect(() => {
    animeInfo(location.state.id).then((data) => setAnimeData(data));
    animeEpisodes(location.state.id.split("/")[2]).then((data) => {
      return data.map(async (episode) => {
        const episodeInfo = await episodeData(episode.id);
        setEpisodesData((values) => {
          const duplicated = values?.some((e) => e.id === episodeInfo.data.id);
          if (!duplicated) return [...values, episodeInfo.data];
          return [...values];
        });
        episodesData.sort((a, b) => a.id - b.id);
      });
    });
  }, []);

  const formatRating = (rating) => {
    return parseFloat(rating / 10).toFixed(1);
  };

  return (
    <HomeWrapper>
      <Poster
        coverImage={animeData?.posterImage.medium}
        height={animeData?.posterImage.meta.dimensions.medium.height}
      ></Poster>
      <div>{animeData?.canonicalTitle}</div>
      <p>Rating: {formatRating(animeData?.averageRating)}</p>
      <p>{animeData?.ageRatingGuide}</p>
      <p>{animeData?.description.split(`(`)[0]}</p>
      <p>Episodes:</p>
      {episodesData.map((e, index) => (
        <EpisodeContainer>
          <Thumbnail
            key={index}
            coverImage={e.attributes.thumbnail.tiny}
            height={e.attributes.thumbnail.meta.dimensions.tiny.height}
            width={e.attributes.thumbnail.meta.dimensions.tiny.width}
          ></Thumbnail>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              paddingLeft: "10px",
              width: "70%",
            }}
          >
            <div>{e.attributes.canonicalTitle}</div>
            <div
              style={{ width: "100%" }}
            >{` ${e.attributes.description.substring(0, 90)}...`}</div>
          </div>
        </EpisodeContainer>
      ))}
      <p>Trailer:</p>
      <iframe
        width="100%"
        height="280px"
        src={`https://www.youtube.com/embed/${animeData?.youtubeVideoId}`}
        title="Chainsaw Man - Main Trailer ／『チェンソーマン』本予告"
        // frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // allowfullscreen
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
  background-repeat: no-repeat;
  background-position-y: 15%;
  height: ${(props) => `${props.height}px`};
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
`;

const Thumbnail = styled.div`
  background-image: url(${(props) => props.coverImage});
  background-size: cover;
  background-repeat: no-repeat;
  height: ${(props) => `${props.height}px`};
  width: 50%;
  margin-bottom: 8px;
`;

const EpisodeContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  /* flex-wrap: wrap; */
  /* width: 100%; */
`;
