import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import {
  useEpisodeData,
  useAnimeEpisodes,
  useAnimeInfo,
} from "../../hooks/api/useAnime";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { EpisodesSectionSkeleton, TitleSectionSkeleton } from "../../componets/utils/shimmers/AnimePageSkeleton";
import TabBar from "./TabBar";

export default function AnimePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { animeInfo } = useAnimeInfo();
  const { animeEpisodes, animeEpisodesLoading } = useAnimeEpisodes();
  const { episodeData, episodeDataLoading } = useEpisodeData();
  const [episodesData, setEpisodesData] = useState([]);
  const [animeData, setAnimeData] = useState();


  useEffect(() => {
    animeInfo(location.state.id).then((data) => setAnimeData(data));
    animeEpisodes(location.state.id.split("anime/")[1]).then((data) => {
      return data.map(async (episode) => {
        const episodeInfo = await episodeData(episode.id);
        setEpisodesData((values) => {
          const duplicated = values?.some((e) => e.id === episodeInfo.data.id);
          if (!duplicated) return [...values, episodeInfo.data];
          return [...values];
        });
      });
    });
  }, []);

  const formatRating = (rating) => {
    return parseFloat(rating / 10).toFixed(1);
  };

  function NavBar() {
    return <IconContext.Provider value={{ size: "24px" }}>
      <BackButton>
        <BsFillArrowLeftCircleFill onClick={() => navigate(-1)} />
      </BackButton>
    </IconContext.Provider>
  }

  function TitleSection() {
    const description = animeData?.description
    const [readMore, setReadMore] = useState(false)
    const descriptionButton = readMore ? " read less" : "... read more"
    const descriptionContent = description?.split(`.`)[0] ?? ''
    const extraContent = readMore ? description?.split(`(`)[0].substring(descriptionContent.length) : ''

    return <>
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>
        {location.state.title}
      </div>
      <DescriptionSection>
        <p>Rating: {formatRating(animeData?.averageRating)}</p>
        <p>{animeData?.ageRatingGuide}</p>
        <div style={{ fontSize: "14px", paddingTop: "8px" }}>
          <div>{descriptionContent}{extraContent}
            <span style={{ fontWeight: "bold" }} onClick={() => setReadMore(!readMore)}>{descriptionButton}</span>
          </div>
        </div>
      </DescriptionSection></>
  }

  function TrailerSection() {
    return <>
      <iframe
        style={{ width: "100%", height: "300px" }}
        src={`https://www.youtube.com/embed/${animeData?.youtubeVideoId}`}
        title={`${animeData?.canonicalTitle} - Main Trailer`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </>
  }

  return (
    <HomeWrapper>
      {animeEpisodesLoading ? <TitleSectionSkeleton /> :
        <>
          <NavBar />
          <Poster
            coverImage={animeData?.posterImage.medium}
            height={animeData?.posterImage.meta.dimensions.medium?.height}
          />
          <div style={{ padding: "0 12px" }}>
            <TitleSection />
            <TabBar
              firstContent={<EpisodesSection isLoading={episodeDataLoading} data={episodesData} />}
              secondContet={< TrailerSection />}
            />
          </div>
        </>
      }

    </HomeWrapper >
  );
}

function EpisodesSection({ isLoading, data }) {
  return isLoading ? <EpisodesSectionSkeleton /> :
    <div>
      {data
        .sort((a, b) => a.id - b.id)
        .map((e) => {
          const anime = e.attributes
          if (anime.thumbnail)
            return (
              <EpisodeContainer key={e.id}>
                <Thumbnail
                  coverImage={
                    anime.thumbnail?.tiny ??
                    anime.thumbnail?.original
                  }
                  height={
                    anime.thumbnail?.meta.dimensions.tiny?.height
                  }
                  width={anime.thumbnail?.meta.dimensions.tiny?.width}
                ></Thumbnail>
                <EpisodeDescription>
                  <div
                    style={{
                      fontSize: "14px",
                      lineHeight: "16px",
                      fontWeight: "bold",
                      paddingBottom: "8px",
                    }}
                  >
                    {anime.canonicalTitle?.length > 40
                      ? `${anime.canonicalTitle?.substring(0, 40)}...`
                      : anime?.canonicalTitle}
                  </div>
                  <div
                    style={{
                      width: "100%",
                      fontSize: "12px",
                      lineHeight: "16px",
                    }}
                  >{` ${anime.description?.substring(
                    0,
                    124 - anime.canonicalTitle?.length
                  )}...`}</div>
                </EpisodeDescription>
              </EpisodeContainer>
            );
        })}
    </div>
}



const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const Poster = styled.div`
  z-index: -1;
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
  height: ${(props) => `${props.height ?? 90}px`};
  width: 50%;
  margin-bottom: 8px;
`;

const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  font-size: 15px;
  line-height: 20px;
`;

const EpisodeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const EpisodeDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-left: 10px;
  width: 70%;
`;

const SectionTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  padding: ${(props) => props.padding};
`;

const BackButton = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  padding: 10px;
`;
